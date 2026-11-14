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
		"content": `<style>.h6fvks3-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21.5 12l-2.75 2.75v4h-4L12 21.5l-2.75-2.75h-4v-4L2.5 12l2.75-2.75v-4h4L12 2.5l2.75 2.75h4v4ZM12 8.5v7M8.5 12h7");
}
</style><path class="h6fvks3-x"/>`,
		"fallback": "uix-sharp:badge-plus",
	});
}

export default Component;
