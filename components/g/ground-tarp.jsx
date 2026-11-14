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
		"content": `<style>.c2dt-8bns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.261 7.5h7.478a1.75 1.75 0 0 1 1.66 1.197l1.833 5.5a1.75 1.75 0 0 1-1.66 2.303H6.428a1.75 1.75 0 0 1-1.66-2.303l1.833-5.5A1.75 1.75 0 0 1 8.261 7.5M5.25 5.25h.01m13.49 0h.01M2.5 19h.01m18.99 0h.01");
}
</style><path class="c2dt-8bns"/>`,
		"fallback": "uix:ground-tarp",
	});
}

export default Component;
