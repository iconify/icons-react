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
		"content": `<style>.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5gf32bev {
  d: path("M8.5 3h7v4.5h-7Zm3.5 8c-1-1-3.5-1.25-3.5 1.5c0 1.75.75 2.5 1 3.75l.75 2.25H11l1-2.5l1 2.5h.75l.75-2.25c.25-1.25 1-2 1-3.75C15.5 9.75 13 10 12 11Z");
}
</style><g class="ulnmmdpxh"><path class="re3nbbcdl"/><path class="x5gf32bev"/></g>`,
		"fallback": "uix-sharp:dental-nurse",
	});
}

export default Component;
