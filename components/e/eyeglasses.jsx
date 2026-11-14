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
		"content": `<style>.sv5-81bsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h7.25v2.75C10.25 13.75 9 15 7 15h-.75C4.25 15 3 13.75 3 11.75Zm18 0h-7.25v2.75c0 2 1.25 3.25 3.25 3.25h.75c2 0 3.25-1.25 3.25-3.25Zm-10.75 1.25c.75-.75 2.75-.75 3.5 0");
}
</style><path class="sv5-81bsx"/>`,
		"fallback": "uix:eyeglasses",
	});
}

export default Component;
