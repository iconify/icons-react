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
		"content": `<style>.lfnd8r5wp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M2.5 21.5V18c0-3.5 2-5 4.5-5s4.5 1.5 4.5 5v3.5m8.786-18.536za1.75 1.75 0 0 1 0 2.475l-4.597 4.597a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475l4.597-4.597a1.75 1.75 0 0 1 2.475 0M14.25 9l-2.75 2.75M21 10.5q-.5 6.5-6 10");
}
</style><path class="lfnd8r5wp"/>`,
		"fallback": "uix:bat-swing-action",
	});
}

export default Component;
