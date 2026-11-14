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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wcyhl2bno {
  d: path("M4.75 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm11 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM5 9l4-5.5m0 0h3.5m0 0v3");
}

.x_tchqfni {
  d: path("M2.5 9h11v8.5h-11Zm11 2.5H18l3.5 3.5v2.5h-8");
}
</style><g class="ulnmmdpxh"><path class="x_tchqfni"/><path class="wcyhl2bno"/></g>`,
		"fallback": "uix-sharp:car-towing",
	});
}

export default Component;
