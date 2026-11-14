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
		"content": `<style>.ly4q0qb9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.5H21.5l-3 4.5H4.25Zm4.25 0V10h7l2 4.5M10 10V4M8 6.5h4");
}
</style><path class="ly4q0qb9i"/>`,
		"fallback": "uix:coast-guard-cutter",
	});
}

export default Component;
