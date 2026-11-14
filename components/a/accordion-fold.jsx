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
		"content": `<style>.rutziqb-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8l4.5-4.5L12 8l4.5-4.5L21 8v12.5L16.5 16L12 20.5L7.5 16L3 20.5Zm4.5-4.5V16M12 8v12.5m4.5-17V16");
}
</style><path class="rutziqb-x"/>`,
		"fallback": "uix:accordion-fold",
	});
}

export default Component;
