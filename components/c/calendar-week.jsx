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
		"content": `<style>.x0m9djrcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18v18H3ZM8 2v3.5M16 2v3.5m-13 2h18M7 11h10M7 14.25h10M7 17.5h10");
}
</style><path class="x0m9djrcs"/>`,
		"fallback": "uix-sharp:calendar-week",
	});
}

export default Component;
