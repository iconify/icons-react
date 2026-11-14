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
		"content": `<style>.a3na7dm-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 6c0-2 .75-3.5 2-3.5S14 4 14 6M8 6h8v3H8ZM7 9h10v12.5H7Zm0 5.5h10");
}
</style><path class="a3na7dm-x"/>`,
		"fallback": "uix-sharp:baby-bottle-milk",
	});
}

export default Component;
