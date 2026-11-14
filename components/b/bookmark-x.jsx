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
		"content": `<style>.qvjyjcc4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12v18l-6-4.5L6 21Zm3.75 4.25l4.5 4.5m0-4.5l-4.5 4.5");
}
</style><path class="qvjyjcc4y"/>`,
		"fallback": "uix-sharp:bookmark-x",
	});
}

export default Component;
