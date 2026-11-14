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
		"content": `<style>.n-3y-4brw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM2.5 21c0-4 3-6.5 6.5-6.5c2.069 0 3.963.874 5.166 2.414m3.95-3.566l3.536 3.536l-1.768 1.768l-3.536-3.536ZM18 17l-3.25 3.25");
}
</style><path class="n-3y-4brw"/>`,
		"fallback": "uix-sharp:defendant",
	});
}

export default Component;
