import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cmprq-jjg {
  d: path("m3 8.5l5 2l4-4l4 3.5l5-3M6.5 15.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h7V18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kebju1mox {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3");
}
</style><g class="hntgybcog"><path class="kebju1mox"/><path class="cmprq-jjg"/></g>`,
		"fallback": "uix:break-glass-for-key",
	});
}

export default Component;
