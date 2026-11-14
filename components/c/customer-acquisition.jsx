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
		"content": `<style>.ehng_1bvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3.5 21v-1.5c0-3 3-5 7-5c1.444 0 2.758.261 3.847.735M18 15v6m-3-3h6");
}
</style><path class="ehng_1bvv"/>`,
		"fallback": "uix-sharp:customer-acquisition",
	});
}

export default Component;
