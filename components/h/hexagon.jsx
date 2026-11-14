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
		"content": `<style>.jra0qcbkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.25l8.444 4.875v9.75L12 21.75l-8.444-4.875v-9.75Z");
}
</style><path class="jra0qcbkb"/>`,
		"fallback": "uix-sharp:hexagon",
	});
}

export default Component;
