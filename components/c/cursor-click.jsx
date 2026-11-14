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
		"content": `<style>.nuds8bcab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.621 9.686l6.661 2.531a1.242 1.242 0 0 1 .093 2.283l-2.144 1.021a1.5 1.5 0 0 0-.71.71L14.5 18.375a1.242 1.242 0 0 1-2.283-.093l-2.531-6.661a1.5 1.5 0 0 1 1.935-1.935M8.5 2.5v3m-6 3h3m-2-5l2.25 2.25");
}
</style><path class="nuds8bcab"/>`,
		"fallback": "uix:cursor-click",
	});
}

export default Component;
