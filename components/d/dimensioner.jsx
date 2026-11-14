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
		"content": `<style>.vsupo9jbb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3H21v11.5H8.5Zm6.25 0v4M8.5 19H21m-10.75-1.75L8.5 19l1.75 1.75m9-3.5L21 19l-1.75 1.75M4 3v11.5M2.25 4.75L4 3l1.75 1.75m-3.5 8L4 14.5l1.75-1.75");
}
</style><path class="vsupo9jbb"/>`,
		"fallback": "uix-sharp:dimensioner",
	});
}

export default Component;
