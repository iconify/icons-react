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
		"content": `<style>.r2jrl6bil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 6l2 2l3.5-4M11 6h10M5.5 12h.01M11 12h10M5.5 18h.01M11 18h6.5");
}
</style><path class="r2jrl6bil"/>`,
		"fallback": "uix:agenda-item",
	});
}

export default Component;
