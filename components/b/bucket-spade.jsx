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
		"content": `<style>.y4va3jb_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5h13l-2 12H5Zm1.5 0a5 5 0 0 1 10 0m3.5 6h3.5V18l-1.75 3L18 18Zm1.75 0V5m-1.5 0h3");
}
</style><path class="y4va3jb_m"/>`,
		"fallback": "uix-sharp:bucket-spade",
	});
}

export default Component;
