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
		"content": `<style>.l2hekrb6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 14V4.5a1.5 1.5 0 0 1 3 0V14a3.5 3.5 0 1 1-3 0ZM10 8.5v7M15 6c1 1.5-1 3 0 4.5M18.5 6c1 1.5-1 3 0 4.5");
}
</style><path class="l2hekrb6h"/>`,
		"fallback": "uix-sharp:fever",
	});
}

export default Component;
