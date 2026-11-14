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
		"content": `<style>.r3hgnf1gu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.697 11.354l5.657-5.657a3.5 3.5 0 0 1 4.949 0a3.5 3.5 0 0 1 0 4.949l-5.657 5.657a3.5 3.5 0 0 1-4.949 0a3.5 3.5 0 0 1 0-4.949m2.828-2.829l4.95 4.95M15.25 19.5c.75-3 2.75-3 3.25-1s2.5 2 3.25-1");
}
</style><path class="r3hgnf1gu"/>`,
		"fallback": "uix:dewormer",
	});
}

export default Component;
