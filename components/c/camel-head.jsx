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
		"content": `<style>.bb71213so {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.25c1-1.75 4-4.25 7-5l.75-.75L11 4c.75 1.5 1 4 1.5 6.5q.75 3 2.25 3c.75-2.5 1.75-5 3.5-5c2 0 3.25 2.5 3.25 6v7H10.75c0-5-.75-8.75-2.75-11.25c-1.5 0-2.25.5-3.25.5s-1.5-.75-1.5-1.5c-.5 0-.75-.5-.75-1m5-1.5h.01");
}
</style><path class="bb71213so"/>`,
		"fallback": "uix:camel-head",
	});
}

export default Component;
