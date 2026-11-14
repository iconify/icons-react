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
		"content": `<style>.e3bxo8bfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5h11m-11 6h18m-18 6h11m3-11q0-5.25 4.5-6q0 5.25-4.5 6Z");
}
</style><path class="e3bxo8bfb"/>`,
		"fallback": "uix-sharp:haiku",
	});
}

export default Component;
