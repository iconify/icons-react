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
		"content": `<style>.zp6qfbblx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 20V6h8.5M6 12.5h7a3.75 3.75 0 0 1 0 7.5H6M18 6v14");
}
</style><path class="zp6qfbblx"/>`,
		"fallback": "uix-sharp:cyrillic-letters",
	});
}

export default Component;
