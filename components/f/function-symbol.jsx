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
		"content": `<style>.upgiprbvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 4.5c-1-.75-2.1-1-3-.75c-1.1.25-1.75 1.15-2 2.5l-2 11.5c-.25 1.35-.9 2.25-2 2.5c-.9.25-2 0-3-.75m3-9.5h8");
}
</style><path class="upgiprbvi"/>`,
		"fallback": "uix-sharp:function-symbol",
	});
}

export default Component;
