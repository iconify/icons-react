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
		"content": `<style>.t5qkf9rks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5H7L14.5 5v13L7 13.5H3.5ZM8 14l1 5m8.5-10.5l3-1.5m-3 7.5l3 1.5");
}
</style><path class="t5qkf9rks"/>`,
		"fallback": "uix:ad",
	});
}

export default Component;
