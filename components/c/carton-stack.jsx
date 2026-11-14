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
		"content": `<style>.mddkfdbso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5H12v7H3.5Zm8.5 0h8.5v7H12ZM7.75 6h8.5v7h-8.5ZM6 13.5v3");
}
</style><path class="mddkfdbso"/>`,
		"fallback": "uix-sharp:carton-stack",
	});
}

export default Component;
