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
		"content": `<style>.dydqy9pqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 2.5h7.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 19.25 7h-7.5A2.25 2.25 0 0 1 9.5 4.75a2.25 2.25 0 0 1 2.25-2.25m0 7.25h7.5A2.25 2.25 0 0 1 21.5 12a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 9.5 12a2.25 2.25 0 0 1 2.25-2.25m0 7.25h7.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 11.75 17M6.5 2.5c-2 0-2 1-2 3V10c0 1.5-1 2-2 2c1 0 2 .5 2 2v4.5c0 2 0 3 2 3");
}
</style><path class="dydqy9pqe"/>`,
		"fallback": "uix:api-batch",
	});
}

export default Component;
