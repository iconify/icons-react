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
		"content": `<style>.hvox3idfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.25c.5-8.5 17.5-8.5 18 0Zm0 3.5q1.5-1.5 3 0t3 0t3 0t3 0t3 0t3 0m-16.25 3.5h14.5A1.75 1.75 0 0 1 21 19a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="hvox3idfs"/>`,
		"fallback": "uix:burger-bun",
	});
}

export default Component;
