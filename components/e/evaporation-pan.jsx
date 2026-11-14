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
		"content": `<style>.n4_xn2kli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 13.5l1.5 6h16l1.5-6m-18.25 3h17.5M7.5 10.75q-1.5-1.5 0-3t0-3m4.5 6q-1.5-1.5 0-3t0-3m4.5 6q-1.5-1.5 0-3t0-3");
}
</style><path class="n4_xn2kli"/>`,
		"fallback": "uix:evaporation-pan",
	});
}

export default Component;
