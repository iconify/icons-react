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
		"content": `<style>.okguy-h_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10h14c0 4.5-3 7-7 7s-7-2.5-7-7Zm7 7v3.5m-4 0h8M7 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><path class="okguy-h_v"/>`,
		"fallback": "uix-sharp:ice-cream-sundae",
	});
}

export default Component;
