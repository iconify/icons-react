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
		"content": `<style>.k5bhakbuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 5.25l1 5h6M9 12h7.5M3 19.5h15q3 0 3.5-3M12 15.25v4.25M15 8l4 11.5");
}
</style><path class="k5bhakbuf"/>`,
		"fallback": "uix:adaptive-skier",
	});
}

export default Component;
