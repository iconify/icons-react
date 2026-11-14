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
		"content": `<style>.cmjr6no4s {
  d: path("M8.375 2.5h7.25A4.375 4.375 0 0 1 20 6.875v7.75A4.375 4.375 0 0 1 15.625 19h-7.25A4.375 4.375 0 0 1 4 14.625v-7.75A4.375 4.375 0 0 1 8.375 2.5M4 8.5h16");
}

.ds6tarbuz {
  d: path("M9 19v-7.5h6V19m-3-7.5V19m-6 0v2.5M18 19v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cmjr6no4s"/><path class="ds6tarbuz"/></g>`,
		"fallback": "uix:bus-door",
	});
}

export default Component;
