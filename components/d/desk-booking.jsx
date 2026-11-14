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
		"content": `<style>.lj2-1achz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h19v3h-19ZM4 9v12h7V9m8.5 0v2.7M4 14.5h7m4 1h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}
</style><path class="lj2-1achz"/>`,
		"fallback": "uix-sharp:desk-booking",
	});
}

export default Component;
