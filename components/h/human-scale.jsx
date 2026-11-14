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
		"content": `<style>.yagj5wbxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM9 8v6.5M6.5 21L9 14.5l2.5 6.5M17 3v18M6 10.5l3-1.75l3 1.75M15.5 3h3m-3 18h3");
}
</style><path class="yagj5wbxl"/>`,
		"fallback": "uix-sharp:human-scale",
	});
}

export default Component;
