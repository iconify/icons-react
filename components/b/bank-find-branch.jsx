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
		"content": `<style>.gb0495bnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5.5l3.65-2.028a1.75 1.75 0 0 1 1.7 0L16.5 5.5a1.334 1.334 0 0 1-.648 2.5H8.148A1.334 1.334 0 0 1 7.5 5.5M3 20h10.1M6 11v6m4-6v6m4-6v2.9m4-2.9v1.5m-2.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="gb0495bnx"/>`,
		"fallback": "uix:bank-find-branch",
	});
}

export default Component;
