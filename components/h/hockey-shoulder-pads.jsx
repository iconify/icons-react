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
		"content": `<style>.x2zw2wbyn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3.5h-2L7 6v10l3.5 4.5Zm3 0h2L17 6v10l-3.5 4.5ZM7 6q-4 0-4 6h4m10-6q4 0 4 6h-4");
}
</style><path class="x2zw2wbyn"/>`,
		"fallback": "uix:hockey-shoulder-pads",
	});
}

export default Component;
