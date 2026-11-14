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
		"content": `<style>.ji5255k6d {
  d: path("M11.7 21H4V2.5h13v8.2M7.5 2.5V21m7-7.5v7.75");
}

.m-x07bbel {
  d: path("M14.5 13.5H21L19.75 16L21 18.5h-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ji5255k6d"/><path class="m-x07bbel"/></g>`,
		"fallback": "uix-sharp:book-fair",
	});
}

export default Component;
