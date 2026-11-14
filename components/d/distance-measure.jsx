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
		"content": `<style>.e06504smj {
  d: path("M2.5 4h9v16h-9ZM21 3.5v17");
}

.m2ac3hbqv {
  d: path("M5.25 6.75h3.5v4h-3.5ZM7 16h.01m7.24-7.25h2.25m2.75 0H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e06504smj"/><path class="m2ac3hbqv"/></g>`,
		"fallback": "uix-sharp:distance-measure",
	});
}

export default Component;
