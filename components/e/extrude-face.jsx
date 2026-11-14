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
		"content": `<style>.t70578dbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 10l6.5 3.25L12 16.5l-6.5-3.25Zm-6.5 3.25v4.5L12 21l6.5-3.25v-4.5M12 16.5V21m0-13.75V2.5M9.5 5L12 2.5L14.5 5");
}
</style><path class="t70578dbr"/>`,
		"fallback": "uix:extrude-face",
	});
}

export default Component;
