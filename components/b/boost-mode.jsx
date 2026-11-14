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
		"content": `<style>.sc-d4sucw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 5.394L6.642 11.02a1.5 1.5 0 0 0 1.135 2.48h1.916a1.5 1.5 0 0 1 1.474 1.776L10.75 17.5a1.05 1.05 0 0 0 1.842.862l4.88-5.907A1.5 1.5 0 0 0 16.315 10H14.33a1.5 1.5 0 0 1-1.471-1.794l.391-1.956a1.007 1.007 0 0 0-1.75-.856");
}
</style><path class="sc-d4sucw"/>`,
		"fallback": "uix:boost-mode",
	});
}

export default Component;
