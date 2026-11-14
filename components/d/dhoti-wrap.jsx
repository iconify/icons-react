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
		"content": `<style>.ir1e13b1y {
  d: path("M10.25 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM10 8q-1.25 5-1.5 9.75M14 8q1.25 5 1.5 9.75");
}

.jainvr19n {
  d: path("M10.25 4.5H6C4.5 10 3.5 15 3 20.5q4.5-1.5 9 0q4.5-1.5 9 0c-.5-5.5-1.5-10.5-3-16h-4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jainvr19n"/><path class="ir1e13b1y"/></g>`,
		"fallback": "uix-sharp:dhoti-wrap",
	});
}

export default Component;
