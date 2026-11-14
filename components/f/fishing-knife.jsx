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
		"content": `<style>.nxbvyebzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 14.25L20.5 3.5q-2 8-10.75 13.25Zm-4.962 4.987l4.949-4.949l2.475 2.475l-4.949 4.949Z");
}
</style><path class="nxbvyebzh"/>`,
		"fallback": "uix-sharp:fishing-knife",
	});
}

export default Component;
