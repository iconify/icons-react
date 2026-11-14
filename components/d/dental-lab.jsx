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
		"content": `<style>.gebubpb-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.205 15H5C3.5 9 5.5 4 9 4.25c1.5.15 2 .75 3 .75s1.5-.6 3-.75c2.885-.206 4.751 3.155 4.477 7.703M18.25 14.5a2.5 2.5 0 1 0 3.25 3.25m-6.75 3.5l3-3");
}
</style><path class="gebubpb-r"/>`,
		"fallback": "uix:dental-lab",
	});
}

export default Component;
