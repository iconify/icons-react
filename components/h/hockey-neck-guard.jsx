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
		"content": `<style>.f84agdcdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6c2.5 3.5 9.5 3.5 12 0v6c0 5-3 8.5-6 8.5S6 17 6 12Zm0 0L3 3.5M18 6l3-2.5");
}
</style><path class="f84agdcdb"/>`,
		"fallback": "uix-sharp:hockey-neck-guard",
	});
}

export default Component;
