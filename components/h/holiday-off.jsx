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
		"content": `<style>.fvt63ddfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.5 13.3v8.2h-17V9h12.2M7.5 9V6A1.5 1.5 0 0 1 9 4.5h4A1.5 1.5 0 0 1 14.5 6v3m-7 0v12.5m7-12.5v12.5m3-17h4v6h-4Z");
}
</style><path class="fvt63ddfd"/>`,
		"fallback": "uix-sharp:holiday-off",
	});
}

export default Component;
