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
		"content": `<style>.sryxigj5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.9 4.24l9.95 4.27L17 9l-1.19.38l-3.12.99l-1.19.38l-.44 1.17l-1.37 3.66l-.44 1.17l-.41-1.18L5.16 4.93l-.41-1.18zm11.35 9.51a3.5 3.5 0 1 1-3.5 3.5");
}
</style><path class="sryxigj5x"/>`,
		"fallback": "iconoven:cursor-loading-sharp",
	});
}

export default Component;
