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
		"content": `<style>.r3uk1966d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 6.5l8-2.5v10l-8-2.5Zm4 6.25v7.75m-3 0h6m4-15.5l5-2m-5 6h6m-6 4l5 2");
}
</style><path class="r3uk1966d"/>`,
		"fallback": "uix-sharp:floodlight",
	});
}

export default Component;
