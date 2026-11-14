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
		"content": `<style>.e44dwk6yx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.25 9.25l-8 8a2.5 2.5 0 0 0 3.5 3.5l8-8m.75-5.25c-1-1.5 1-2.5 0-4.5m4 7.5c-1-1.5 1-2.5 0-4.5m-9.25-2a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><path class="e44dwk6yx"/>`,
		"fallback": "uix-sharp:gas-evolved",
	});
}

export default Component;
