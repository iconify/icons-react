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
		"content": `<style>.fp-zxvb4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20h18M3.5 14l2-2.5l4.5 1L14 9L9.5 6l2-1.5L19 8c2 1 1.5 3-.5 4L7 16.5Z");
}
</style><path class="fp-zxvb4k"/>`,
		"fallback": "uix-sharp:airplane-takeoff",
	});
}

export default Component;
