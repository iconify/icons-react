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
		"content": `<style>.hgl91nb7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6v6H9Zm-6.5 13h6v6h-6Zm13 0h6v6h-6Zm-7 3h7M10 8.5l-3.5 7m7.5-7l3.5 7");
}
</style><path class="hgl91nb7t"/>`,
		"fallback": "uix-sharp:cluster",
	});
}

export default Component;
