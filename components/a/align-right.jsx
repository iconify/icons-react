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
		"content": `<style>.mjurgbb-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5H18V10H4.5Zm5 9.5H18v5.5H9.5ZM21 2.5v19");
}
</style><path class="mjurgbb-m"/>`,
		"fallback": "uix-sharp:align-right",
	});
}

export default Component;
