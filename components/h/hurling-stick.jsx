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
		"content": `<style>.yvtw3zn5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 2.5L13 13m0 0c0 4-2 8-6 8.5c-2.5.25-3-2-1.5-3.5c2-2 4-3 7.5-5Zm3.25 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><path class="yvtw3zn5y"/>`,
		"fallback": "uix-sharp:hurling-stick",
	});
}

export default Component;
