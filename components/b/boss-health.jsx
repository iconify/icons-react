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
		"content": `<style>.nmznx-b8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10V5.5l2 2L7 4.75L8.5 7.5l2-2V10Zm-1 3h19v6.5h-19Zm3 3.25h10.25");
}
</style><path class="nmznx-b8e"/>`,
		"fallback": "uix-sharp:boss-health",
	});
}

export default Component;
