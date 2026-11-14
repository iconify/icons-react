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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nnesufm0r {
  d: path("m15.987 5.641l2.5-.909a1.5 1.5 0 0 1 2.013 1.41v2.716a1.5 1.5 0 0 1-2.013 1.41l-2.5-.909A1.5 1.5 0 0 1 15 7.949v-.898a1.5 1.5 0 0 1 .987-1.41M9 11.5v3m0 0l-4 6m4-6l4 6");
}

.ox5k2qb9x {
  d: path("M5.625 3.5h6.75A2.625 2.625 0 0 1 15 6.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 3 8.875v-2.75A2.625 2.625 0 0 1 5.625 3.5");
}
</style><g class="hntgybcog"><path class="ox5k2qb9x"/><path class="nnesufm0r"/></g>`,
		"fallback": "uix:conference-camera",
	});
}

export default Component;
