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
		"content": `<style>.e9ldk6bcb {
  d: path("M9.75 13.5q0-2 1.75-2.75");
}

.l_w6d2zjv {
  d: path("m12 3l3.25 5L21 9.5l-3.75 4.75l.25 6L12 18l-5.5 2.25l.25-6L3 9.5L8.75 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l_w6d2zjv"/><path class="e9ldk6bcb"/></g>`,
		"fallback": "uix-sharp:gummy-vitamin",
	});
}

export default Component;
