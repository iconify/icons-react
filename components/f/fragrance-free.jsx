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
		"content": `<style>.cynn8-igd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.6 21.5H5.5V10h.6m7.8 0h4.6v4.6M9 5.1V4h6v6h-1.1M3.5 3.5l17 17");
}
</style><path class="cynn8-igd"/>`,
		"fallback": "uix-sharp:fragrance-free",
	});
}

export default Component;
