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
		"content": `<style>.lgkoaiiny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5L8.25 4h1l4.816 15.137M5 14.5h7.5m4.25 3.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4.5-2.75v5.25");
}
</style><path class="lgkoaiiny"/>`,
		"fallback": "uix:brand-font-pair",
	});
}

export default Component;
