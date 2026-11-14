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
		"content": `<style>.rmxem0b8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 21V2.5h3V21m-3-13l3 4.5l-3 4.5M3 21l7.5-13M7 21l3.5-4M21 21L13.5 5m4 16l-4-8.5");
}
</style><path class="rmxem0b8c"/>`,
		"fallback": "uix:cell-tower-guyed",
	});
}

export default Component;
