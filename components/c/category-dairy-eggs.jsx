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
		"content": `<style>.w0kkj23un {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 18.599V21.5H3v-12L5 3h4.5l2 6.5v8.899M3 9.5h8.5m6.25 3.5c2.5 0 3.5 3.5 3.5 5.5a3.5 3.5 0 0 1-7 0c0-2 1-5.5 3.5-5.5");
}
</style><path class="w0kkj23un"/>`,
		"fallback": "uix:category-dairy-eggs",
	});
}

export default Component;
