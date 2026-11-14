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
		"content": `<style>.a5xbu_bvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3h5c0 3 2.5 5.5 2.5 9.5c0 3-2 4.5-5 4.5s-5-1.5-5-4.5C7 8.5 9.5 6 9.5 3ZM12 17v2m-4 0h8v2.5H8Z");
}
</style><path class="a5xbu_bvw"/>`,
		"fallback": "uix-sharp:glencairn-glass",
	});
}

export default Component;
