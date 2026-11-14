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
		"content": `<style>.ys8rxacpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19v3.25h-19Zm9.5 0v-3M3.5 16a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm10 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM7 16h.01M17 16h.01");
}
</style><path class="ys8rxacpo"/>`,
		"fallback": "uix-sharp:bogie",
	});
}

export default Component;
