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
		"content": `<style>.t9b6_jbmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.75V9A2.5 2.5 0 0 1 5 6.5h2.5m2.75 0h3.5m2.75 0H19A2.5 2.5 0 0 1 21.5 9v.75m0 4.5V15a2.5 2.5 0 0 1-2.5 2.5h-2.5m-2.75 0h-3.5m-2.75 0H5A2.5 2.5 0 0 1 2.5 15v-.75m6-2.25h7");
}
</style><path class="t9b6_jbmg"/>`,
		"fallback": "uix:button-secondary",
	});
}

export default Component;
