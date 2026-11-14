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
		"content": `<style>.ad7ucbnxe {
  d: path("M10 15.5q2-1.5 4 0");
}

.ag3uohlev {
  d: path("M8 16.75L3 9.5l-.5-3.75l3 2l4.75 5v-6L12 3.25l1.75 3.5v6l4.75-5l3-2L21 9.5l-5 7.25a4 4 0 0 1-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ag3uohlev"/><path class="ad7ucbnxe"/></g>`,
		"fallback": "uix-sharp:dino-footprint",
	});
}

export default Component;
