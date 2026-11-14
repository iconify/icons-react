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
		"content": `<style>.ezoz2c5do {
  d: path("M3 18h14.5c1.5 0 2.5-1 3-2.5L21 13m-9-4.75a3.25 3.25 0 1 1-3.25 3.25");
}

.sz9rzdptz {
  d: path("M5.5 11.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sz9rzdptz"/><path class="ezoz2c5do"/></g>`,
		"fallback": "uix-sharp:escargot",
	});
}

export default Component;
