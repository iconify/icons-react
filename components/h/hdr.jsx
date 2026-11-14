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
		"content": `<style>.ff7jv6lvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5v7m4-7v7m-4-3.5h4M9 8.5h1a3.5 3.5 0 0 1 0 7H9Zm7 7v-7h2.75a2 2 0 0 1 0 4H16m2.75 0l2.25 3");
}
</style><path class="ff7jv6lvk"/>`,
		"fallback": "uix:hdr",
	});
}

export default Component;
