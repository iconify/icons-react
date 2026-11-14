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
		"content": `<style>.gl7dgev7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3a6 6 0 0 1 4 10.5V16H8v-2.5A6 6 0 0 1 12 3ZM9.5 19h5m-4 2.5h3");
}
</style><path class="gl7dgev7q"/>`,
		"fallback": "uix-sharp:category-lighting",
	});
}

export default Component;
