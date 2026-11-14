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

.m33ss0bea {
  d: path("M18 2.5V6h-3.5");
}

.tkrcfhgkm {
  d: path("M20.5 12A8.5 8.5 0 1 1 18 6");
}
</style><g class="hntgybcog"><path class="tkrcfhgkm"/><path class="m33ss0bea"/></g>`,
		"fallback": "uix:debug-restart",
	});
}

export default Component;
