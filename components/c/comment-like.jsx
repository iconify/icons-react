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
		"content": `<style>.m69eo45wu {
  d: path("M5 17a8.5 8.5 0 1 1 15.5-4.75h-6.25a2 2 0 0 0-2 2v6.25a8.5 8.5 0 0 1-4.75-1l-3.5 1Z");
}

.tl-7l28gj {
  d: path("M18 21s-3-1.75-3-4c0-1 .75-1.75 1.75-1.75c.5 0 1 .25 1.25.75c.25-.5.75-.75 1.25-.75c1 0 1.75.75 1.75 1.75c0 2.25-3 4-3 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m69eo45wu"/><path class="tl-7l28gj"/></g>`,
		"fallback": "uix-sharp:comment-like",
	});
}

export default Component;
