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
		"content": `<style>.ltla23bnh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V15l3.25-3v3L9 12v3h2.75v-5h3v5H18v-5h3v11.5Zm9-16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.25-1a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="ltla23bnh"/>`,
		"fallback": "uix:factory-fumes-green",
	});
}

export default Component;
