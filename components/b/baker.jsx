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
		"content": `<style>.r06malbur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11V8.5a2.5 2.5 0 0 1 .75-4a2.5 2.5 0 0 1 4.5 0a2.5 2.5 0 0 1 .75 4V11Zm.5 0v1a2.5 2.5 0 0 0 5 0v-1M3 21.5c0-2.5 3-4.25 7.5-4.25q.486 0 .948.027M7.5 8.5h6m1.5 13V18a2 2 0 0 1 1-3.5h4a2 2 0 0 1 1 3.5v3.5Z");
}
</style><path class="r06malbur"/>`,
		"fallback": "uix:baker",
	});
}

export default Component;
