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
		"content": `<style>.uzh5ajr_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16h18l-2.5 4.5h-13Zm2-5h4v5H5Zm5 0h4v5h-4Zm7-7.5V9m-2.5-2.5L17 9l2.5-2.5");
}
</style><path class="uzh5ajr_d"/>`,
		"fallback": "uix-sharp:container-ship-loading",
	});
}

export default Component;
