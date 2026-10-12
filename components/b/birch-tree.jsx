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
		"content": `<style>.uyexpmj8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.75 21.25l1-17.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75l1 17.75ZM10.5 8.5H12m2 4.25h-1.75m-2 4.25H12m1.75-7l3.75-3.25m-7 6.75l-4-2.5m11-4.25c.25-1.5 1.5-2.5 3.25-2.5c0 1.75-1.5 2.75-3.25 2.5M6.5 11C6.25 9.5 5 8.5 3.25 8.5c0 1.75 1.5 2.75 3.25 2.5");
}
</style><path class="uyexpmj8z"/>`,
		"fallback": "iconoven:birch-tree",
	});
}

export default Component;
