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
		"content": `<style>.d313b2bbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 14.5c-2-1.25-6-1.5-9-.75v6.75c3-.75 7-.5 9 .75c2-1.25 6-1.5 9-.75v-6.75c-3-.75-7-.5-9 .75m0 0v6.75M8.5 2.5h7a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2l-1.5 2l-1.5-2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2");
}
</style><path class="d313b2bbp"/>`,
		"fallback": "uix:first-words-book",
	});
}

export default Component;
