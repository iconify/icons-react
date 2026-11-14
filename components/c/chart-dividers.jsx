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
		"content": `<style>.xnphprfbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm1.25 1.75L6 21.5m6.75-14.75L18 21.5");
}
</style><path class="xnphprfbg"/>`,
		"fallback": "uix-sharp:chart-dividers",
	});
}

export default Component;
