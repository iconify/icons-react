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
		"content": `<style>.xvuy171ak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19.5h3.5c-2.5-2-4-5-4-8.5S7 5 12 5s7.5 2.5 7.5 6s-1.5 6.5-4 8.5H19");
}
</style><path class="xvuy171ak"/>`,
		"fallback": "uix:greek-letters",
	});
}

export default Component;
