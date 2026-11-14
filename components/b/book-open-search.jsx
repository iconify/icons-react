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
		"content": `<style>.x-rw3lbdg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19 12.376V4.75c-2.5-.5-5.75 0-8 1.5c-2.25-1.5-5.5-2-8.5-1.5V18.5c3-.5 6.25 0 8.5 1.5a9 9 0 0 1 1.39-.751M11 6.25V20m4-2.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m4.75 2l2 2");
}
</style><path class="x-rw3lbdg"/>`,
		"fallback": "uix:book-open-search",
	});
}

export default Component;
