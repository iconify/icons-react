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
		"content": `<style>.e1x0z0tob {
  d: path("M17 9.25C16.75 8.5 15.75 8 14.5 8C13 8 12 8.75 12 10c0 2.5 5 1.5 5 4c0 1.25-1 2-2.5 2s-2.5-.5-2.75-1.25m2.75-8V8m0 8v1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xi65ahb3q {
  d: path("M2.5 12L8 4h11.5q2 0 2 2v12q0 2-2 2H8Z");
}
</style><g class="ulnmmdpxh"><path class="xi65ahb3q"/><path class="e1x0z0tob"/></g>`,
		"fallback": "uix-sharp:ad-label-sponsored",
	});
}

export default Component;
