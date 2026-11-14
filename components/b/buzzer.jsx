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
		"content": `<style>.gvb0pwn9y {
  d: path("M6 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m10.5-5.25a9.25 9.25 0 0 1 0 10.5m3.25-11.5a12.5 12.5 0 0 1 0 12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yppqtphiq {
  d: path("M3 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}
</style><g class="hntgybcog"><path class="yppqtphiq"/><path class="gvb0pwn9y"/></g>`,
		"fallback": "uix:buzzer",
	});
}

export default Component;
