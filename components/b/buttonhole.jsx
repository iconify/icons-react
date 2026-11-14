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
		"content": `<style>.t7x2l3bsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 12a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0M17.5 5za3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m-12 7h.01m2.99 0h.01m8.99-3.5v7");
}
</style><path class="t7x2l3bsp"/>`,
		"fallback": "uix:buttonhole",
	});
}

export default Component;
