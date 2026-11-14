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
		"content": `<style>.rwu__3bob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 11.5h-19V18H5l4.5-3.5h5v-3M7.5 6H15v2.75H7.5Z");
}
</style><path class="rwu__3bob"/>`,
		"fallback": "uix-sharp:biathlon-rifle",
	});
}

export default Component;
