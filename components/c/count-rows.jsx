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
		"content": `<style>.cyz0kqbnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h9v4h-9Zm0 6h9v4h-9Zm0 6h9v4h-9Zm14-1.5v7m3-7v7m-5-5h7m-7 3h7");
}
</style><path class="cyz0kqbnb"/>`,
		"fallback": "uix-sharp:count-rows",
	});
}

export default Component;
