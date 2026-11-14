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
		"content": `<style>.zb19ydzyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 12a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0ZM15.5 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm-10 7h.01m2.99 0h.01m8.99-3.5v7");
}
</style><path class="zb19ydzyj"/>`,
		"fallback": "uix-sharp:buttonhole",
	});
}

export default Component;
