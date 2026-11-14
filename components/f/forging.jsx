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
		"content": `<style>.tx7jtvb6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h17v2a3 3 0 0 1-3 3H15l2 3.5H7l2-3.5H8c-3 0-5-2-5.5-5Zm10-10H17v7h-4.5Zm-8 7l8-3.75");
}
</style><path class="tx7jtvb6z"/>`,
		"fallback": "uix-sharp:forging",
	});
}

export default Component;
