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
		"content": `<style>.r1u531x9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5V21m17-17.5V21M3.5 6h17M9 6L6.5 8.5l2 2l1-.75V17h5V9.75l1 .75l2-2L15 6");
}
</style><path class="r1u531x9x"/>`,
		"fallback": "uix:clothesline",
	});
}

export default Component;
