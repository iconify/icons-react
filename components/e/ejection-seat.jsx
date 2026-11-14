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
		"content": `<style>.gbnf806tz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 5.5l3 11h8m-4.25 0v5m-3.25 0H15m.5-8V3m-2.75 2.75L15.5 3l2.75 2.75");
}
</style><path class="gbnf806tz"/>`,
		"fallback": "uix:ejection-seat",
	});
}

export default Component;
