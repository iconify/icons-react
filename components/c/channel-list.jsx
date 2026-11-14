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
		"content": `<style>.plglm39ek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19V21h-19Zm5.5-5l4 5l4-5m-9 8.75h10m-10 3h10m-10 3h6.5");
}
</style><path class="plglm39ek"/>`,
		"fallback": "uix-sharp:channel-list",
	});
}

export default Component;
