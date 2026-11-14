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
		"content": `<style>.ahzq61h6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2 21.5c0-3 5.25-3.5 6.5-1.25c1.25-2.25 5.75-2.25 7 0C16.75 18 22 18.5 22 21.5M13.5 8V3l2.75 1.5M10 8a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 10 8Z");
}
</style><path class="ahzq61h6k"/>`,
		"fallback": "uix-sharp:choir",
	});
}

export default Component;
