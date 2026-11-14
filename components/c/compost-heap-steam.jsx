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
		"content": `<style>.tzxuf376x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20c0-3.5 1.5-5.5 4-5.5q1.5-3 4.5-3c2 0 3.5.5 5 1.5c2.5.5 3.5 3.5 3.5 7m-18 0h19m-14-5.5l-2-2.25M17 13l2-2.25m-9-2C9 7.5 11 5.5 10 3.5m4 5.25C13 7.5 15 5.5 14 3.5");
}
</style><path class="tzxuf376x"/>`,
		"fallback": "uix-sharp:compost-heap-steam",
	});
}

export default Component;
