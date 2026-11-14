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
		"content": `<style>.dq32l9bbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M2.5 20.5c0-3.75 2.5-6 6-6c1 0 1.9.2 2.75.5m4.25-4.5h3.75A1.75 1.75 0 0 1 21 12.25v7.5a1.75 1.75 0 0 1-1.75 1.75H15.5a1.75 1.75 0 0 1-1.75-1.75v-7.5a1.75 1.75 0 0 1 1.75-1.75m1 0v11");
}
</style><path class="dq32l9bbe"/>`,
		"fallback": "uix:bookkeeper-ledger",
	});
}

export default Component;
