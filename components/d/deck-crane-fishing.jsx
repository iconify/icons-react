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
		"content": `<style>.ks4u68bas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h15l-2 6h-10Zm3-4.5H10v4.5H5.5Zm8 4.5V6l4-2L21 8m0 0v4.5");
}
</style><path class="ks4u68bas"/>`,
		"fallback": "uix-sharp:deck-crane-fishing",
	});
}

export default Component;
