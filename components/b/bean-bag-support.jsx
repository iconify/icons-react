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
		"content": `<style>.cdhe26wsb {
  d: path("M5.5 4h13v7.5h-13ZM10 4l1-1.5h2L14 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0w8s2wku {
  d: path("M5.5 10c-2.5.5-3 4-3 7c0 2.75 1.5 4 4 4h11c2.5 0 4-1.25 4-4c0-3-.5-6.5-3-7M10 7.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="cdhe26wsb"/><path class="y0w8s2wku"/></g>`,
		"fallback": "uix-sharp:bean-bag-support",
	});
}

export default Component;
