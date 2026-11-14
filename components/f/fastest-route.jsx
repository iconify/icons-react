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
		"content": `<style>.adamt5b8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 18.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0C13 18.5 13 11 20.5 11M18 8.5l2.5 2.5l-2.5 2.5M6 3.5L8.5 6L6 8.5m4.5-5L13 6l-2.5 2.5");
}
</style><path class="adamt5b8b"/>`,
		"fallback": "uix-sharp:fastest-route",
	});
}

export default Component;
