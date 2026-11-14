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
		"content": `<style>.ldxlb-ggo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3za2 2 0 0 1 2 2v4a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m12 0za2 2 0 0 1 2 2v4a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2M7 7h8m-.25 11l2 2L21 15.75");
}
</style><path class="ldxlb-ggo"/>`,
		"fallback": "uix:dumbbell-check",
	});
}

export default Component;
