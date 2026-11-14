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
		"content": `<style>.k7w_a6a0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 21.5l5.5-6h6l5.5 6M10.25 6h3.5v9.5h-3.5ZM12 3.5V6M7.5 3.5h9");
}
</style><path class="k7w_a6a0t"/>`,
		"fallback": "uix-sharp:aircraft-jack",
	});
}

export default Component;
