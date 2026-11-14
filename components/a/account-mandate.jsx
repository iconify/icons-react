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
		"content": `<style>.lt3xg905l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5C5 11 6 5 8 5.5s-1 8 1 8c1.5 0 2.5-4.5 4.5-4.5c1.5 0 1 3.5 2.5 3.5c1.25 0 2.5-1.5 4-2.5M3 17.5h8.3m3.45.5l2 2L21 15.75");
}
</style><path class="lt3xg905l"/>`,
		"fallback": "uix-sharp:account-mandate",
	});
}

export default Component;
