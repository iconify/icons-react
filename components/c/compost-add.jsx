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
		"content": `<style>.tsjt91jcn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h18M4 8l1.5 11.5h7.103m6.21-7.196L19 8m-8 0V4.5M11 6Q7 6 7 2.5q4 0 4 3.5m0-1q4 0 4-3q-4 0-4 3m7 10v6m-3-3h6");
}
</style><path class="tsjt91jcn"/>`,
		"fallback": "uix:compost-add",
	});
}

export default Component;
