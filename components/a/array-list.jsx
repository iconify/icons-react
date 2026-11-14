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
		"content": `<style>.pxnzjbz8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h8v18H8Zm0 6h8m-8 6h8M5 3H3.5v18H5M19 3h1.5v18H19");
}
</style><path class="pxnzjbz8s"/>`,
		"fallback": "uix-sharp:array-list",
	});
}

export default Component;
