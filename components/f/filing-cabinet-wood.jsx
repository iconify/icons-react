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
		"content": `<style>.weri72bra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v18H5Zm0 6h14m-14 6h14m-9-9h4m-4 6h4m-4 6h4");
}
</style><path class="weri72bra"/>`,
		"fallback": "uix-sharp:filing-cabinet-wood",
	});
}

export default Component;
