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
		"content": `<style>.acco-lb6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m2.25 5V14m-3 7.5V14h6v7.5M5.5 16v-5l1.75-1.75h9.5L18.5 11v5m-11 2h3m3 0h3M4 13h3m10 0h3");
}
</style><path class="acco-lb6q"/>`,
		"fallback": "uix:exoskeleton",
	});
}

export default Component;
