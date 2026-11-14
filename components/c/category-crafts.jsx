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
		"content": `<style>.b7st0pbmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5h13V7h-13Zm0 13.5h13v3.5h-13ZM8 7v10m8-10v10m-8-7l8 2.5M8 14l8 2");
}
</style><path class="b7st0pbmc"/>`,
		"fallback": "uix-sharp:category-crafts",
	});
}

export default Component;
