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
		"content": `<style>.po2pceb7v {
  d: path("M10 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.pq8jfhblb {
  d: path("m6.5 21.5l5.5-13l2.449 5.788M16 3.5a4.5 4.5 0 0 1 0 6m3-7a8 8 0 0 1 0 8m-11-7a4.5 4.5 0 0 0 0 6m-3-7a8 8 0 0 0 0 8m9.75 7.5l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="po2pceb7v"/><path class="pq8jfhblb"/></g>`,
		"fallback": "uix-sharp:broadcast-tower-check",
	});
}

export default Component;
