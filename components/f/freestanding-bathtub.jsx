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
		"content": `<style>.krw7hzbgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6Zm4 8.5L7 21m9-1.5l1 1.5m2-10V6a2 2 0 0 0-4 0");
}
</style><path class="krw7hzbgj"/>`,
		"fallback": "uix-sharp:freestanding-bathtub",
	});
}

export default Component;
