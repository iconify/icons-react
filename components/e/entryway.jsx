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
		"content": `<style>.urj40eq8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 18V4a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 4v14M2.5 18h19M6.875 20h10.25a.875.875 0 0 1 .875.875a.875.875 0 0 1-.875.875H6.875A.875.875 0 0 1 6 20.875A.875.875 0 0 1 6.875 20M14 11h.01");
}
</style><path class="urj40eq8r"/>`,
		"fallback": "uix:entryway",
	});
}

export default Component;
