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
		"content": `<style>.u141utbat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 11h11a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 14.5A3.5 3.5 0 0 1 6.5 11m0 0L5 3.5M17.5 11L19 3.5M2.5 21h19M7 14.5h.01m2.99 0h.01");
}
</style><path class="u141utbat"/>`,
		"fallback": "uix:edge-router",
	});
}

export default Component;
