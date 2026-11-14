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
		"content": `<style>.h_1l0ev1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5L7.25 4L12 20.5m-7.75-6h6m4 2.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm7-4.5v8");
}
</style><path class="h_1l0ev1n"/>`,
		"fallback": "uix-sharp:font-family",
	});
}

export default Component;
