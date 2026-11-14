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
		"content": `<style>.fsj0fqder {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.4 20.25H4V6.5h2.5v-4h6v4H15v6.15M7.5 9.5h.01m3.99 0h.01m-4.01 3h.01m3.99 0h.01m-4.01 3h.01m3.99 0h.01m2.24 2.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m4.75 2l1.75 1.75");
}
</style><path class="fsj0fqder"/>`,
		"fallback": "uix:company-lookup",
	});
}

export default Component;
