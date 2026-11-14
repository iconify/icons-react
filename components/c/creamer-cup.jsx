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
		"content": `<style>.e904o1b7t {
  d: path("M4 8a8 2.25 0 1 0 16 0A8 2.25 0 1 0 4 8Z");
}

.m1csnre9n {
  d: path("m4 8l2.75 13h10.5L20 8M7.5 6.25l-2-3.75h3l2 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e904o1b7t"/><path class="m1csnre9n"/></g>`,
		"fallback": "uix-sharp:creamer-cup",
	});
}

export default Component;
