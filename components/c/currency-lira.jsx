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
		"content": `<style>.zbl_w-s7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5v16c4.75 0 8.5-3 8.5-8M6 11l7-3m-7 7l7-3");
}
</style><path class="zbl_w-s7t"/>`,
		"fallback": "uix-sharp:currency-lira",
	});
}

export default Component;
