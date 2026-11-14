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
		"content": `<style>.k9_3d_b4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.737 4.737l5.526 5.526a1.75 1.75 0 0 1 0 2.474l-.526.526a1.75 1.75 0 0 1-2.474 0L4.737 7.737a1.75 1.75 0 0 1 0-2.474l.526-.526a1.75 1.75 0 0 1 2.474 0M13 13l3 3M2.5 7.5l5-5M5 5L3 3m17 13h.01M19 19h.01M16 20h.01");
}
</style><path class="k9_3d_b4g"/>`,
		"fallback": "uix:air-water-syringe",
	});
}

export default Component;
