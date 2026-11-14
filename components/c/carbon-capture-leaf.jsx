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
		"content": `<style>.e30uyxb9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.246 13.8C12.491 16.809 8.309 18.5 3 18.5C3 9 8 3 19 3c0 3.394-.766 6.341-2.206 8.728M3 18.5l8.5-8.5m6.5 4.5v7m-3-3l3 3l3-3");
}
</style><path class="e30uyxb9n"/>`,
		"fallback": "uix-sharp:carbon-capture-leaf",
	});
}

export default Component;
