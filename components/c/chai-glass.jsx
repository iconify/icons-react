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
		"content": `<style>.d8iiscdzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8h10l-1 12.5H8Zm.25 3h9.5M10 5.25c-.75-.75.75-1.75 0-2.75m4 2.75c-.75-.75.75-1.75 0-2.75");
}
</style><path class="d8iiscdzc"/>`,
		"fallback": "uix-sharp:chai-glass",
	});
}

export default Component;
