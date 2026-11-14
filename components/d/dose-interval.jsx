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
		"content": `<style>.w8mwpue-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5V5a2 2 0 0 1 4 0v5a2 2 0 0 1-4 0V7.5h4m3 0V5a2 2 0 0 1 4 0v5a2 2 0 0 1-4 0V7.5h4m3 0V5a2 2 0 0 1 4 0v5a2 2 0 0 1-4 0V7.5h4M4 18h16M6.5 15.5L4 18l2.5 2.5m11-5L20 18l-2.5 2.5");
}
</style><path class="w8mwpue-v"/>`,
		"fallback": "uix-sharp:dose-interval",
	});
}

export default Component;
