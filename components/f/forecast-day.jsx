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
		"content": `<style>.el1n0acwg {
  d: path("M11.25 9A2.75 2.75 0 1 0 9 11.75");
}

.g-brwyb-v {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m6bb1nbgr {
  d: path("M9 16.5h7.5a2 2 0 0 0 0-4a3.75 3.75 0 0 0-7.5 0a2 2 0 0 0 0 4");
}
</style><g class="hntgybcog"><path class="g-brwyb-v"/><path class="el1n0acwg"/><path class="m6bb1nbgr"/></g>`,
		"fallback": "uix:forecast-day",
	});
}

export default Component;
