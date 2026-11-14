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
		"content": `<style>.t0j2o_bry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c0-2.75 2.1-4.75 4.75-4.75S12 17.25 12 20c0 .6-.4 1-1 1H3.5c-.6 0-1-.4-1-1M4.25 7.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0m9.75 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M15.25 18L17 19.75l4-4");
}
</style><path class="t0j2o_bry"/>`,
		"fallback": "uix:friend-check",
	});
}

export default Component;
