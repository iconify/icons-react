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
		"content": `<style>.dyqjplbuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 6h9l3 3v12.5h-15V9ZM12 6V5a1.5 1.5 0 1 0-1.5-1.5m1.5 5V20m0-9l2 1.75");
}
</style><path class="dyqjplbuc"/>`,
		"fallback": "uix-sharp:garment-cover",
	});
}

export default Component;
