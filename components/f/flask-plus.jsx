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
		"content": `<style>.p6tp6_b5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4v6.1L16.96 14H7.04L10 8.85ZM7.04 14h9.92l2.24 3.9a2.25 2.25 0 0 1-1.95 3.35H6.79a2.25 2.25 0 0 1-1.95-3.35ZM8.5 2.75h7");
}
</style><path class="p6tp6_b5k"/>`,
		"fallback": "iconoven:flask-plus",
	});
}

export default Component;
