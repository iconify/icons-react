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
		"content": `<style>.z3sd1ir2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5V3h3.5m11 0H21v3.5m0 11V21h-3.5m-11 0H3v-3.5M10 3h4m7 7v4m-7 7h-4m-7-7v-4m.5 6l1.25-.25L6 15.5m1.75-1l1-.5l1-.75M11.5 12l1-.5l1-.75m1.75-1l1.25-.5L17.75 9m1.75-.5H21");
}
</style><path class="z3sd1ir2g"/>`,
		"fallback": "uix:easement",
	});
}

export default Component;
