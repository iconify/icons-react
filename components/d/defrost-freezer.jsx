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
		"content": `<style>.tzfq7ac1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5v11M3.25 5.25l9.5 5.5m0-5.5l-9.5 5.5M16.5 12s-3 3.5-3 5.75a3 3 0 0 0 6 0c0-2.25-3-5.75-3-5.75");
}
</style><path class="tzfq7ac1e"/>`,
		"fallback": "uix:defrost-freezer",
	});
}

export default Component;
