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
		"content": `<style>.kraycqy0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 14.5h6l3.5 6.5h-13ZM7 3l5 3.5L17 3M7 7.25l5 3.5l5-3.5");
}
</style><path class="kraycqy0h"/>`,
		"fallback": "uix-sharp:g-force",
	});
}

export default Component;
