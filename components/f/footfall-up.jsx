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
		"content": `<style>.a58uqxjzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 6.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM3.5 17v-3a4.5 4.5 0 0 1 9 0v3m5.5 1V5m-2.5 2.5L18 5l2.5 2.5");
}
</style><path class="a58uqxjzb"/>`,
		"fallback": "uix-sharp:footfall-up",
	});
}

export default Component;
