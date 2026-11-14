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
		"content": `<style>.kj84b0b8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.2 21.5H4v-19h13v8.1M4 10h13M7 5.25v2m0 5.5v4m11.5-3.5L21 16.5a3.25 3.25 0 1 1-5 0Z");
}
</style><path class="kj84b0b8r"/>`,
		"fallback": "uix-sharp:fridge-water-filter",
	});
}

export default Component;
