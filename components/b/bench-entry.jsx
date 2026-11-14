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
		"content": `<style>.k3-pqvb8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 7h13.75A2.625 2.625 0 0 1 21.5 9.625v.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 9.875v-.25A2.625 2.625 0 0 1 5.125 7M2.5 9.75h19M6 12.5L4.5 18M18 12.5l1.5 5.5");
}
</style><path class="k3-pqvb8k"/>`,
		"fallback": "uix:bench-entry",
	});
}

export default Component;
