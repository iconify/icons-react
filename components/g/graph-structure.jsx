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
		"content": `<style>.tmjfc68ui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h7v6h-7Zm12 0h7v6h-7Zm0 13h7v6h-7Zm-5-10h5M6 8.5v10h8.5");
}
</style><path class="tmjfc68ui"/>`,
		"fallback": "uix-sharp:graph-structure",
	});
}

export default Component;
