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
		"content": `<style>.n9wchqb-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21v-5a3 3 0 0 1 3-3H9v-2.5h6V13h2.5a3 3 0 0 1 3 3v5ZM12 10.5c.5-4.5 4-7 9-7.5c-.5 4.5-4 7-9 7.5M8 17h8");
}
</style><path class="n9wchqb-k"/>`,
		"fallback": "uix:inkwell",
	});
}

export default Component;
