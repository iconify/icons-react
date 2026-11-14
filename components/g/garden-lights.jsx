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
		"content": `<style>.pcbitgb8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 7l2.5-3h5L17 7Zm1.5 0h7v8h-7Zm3.5 8v6.5m-3 0h6M3 11h2.25m13.5 0H21");
}
</style><path class="pcbitgb8r"/>`,
		"fallback": "uix-sharp:garden-lights",
	});
}

export default Component;
