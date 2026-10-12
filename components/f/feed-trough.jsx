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
		"content": `<style>.u9wu764zr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10.25c1.5-2 4-3 7-3s5.5 1 7 3Zm-1.45 0h16.9q.8 0 .47.73l-2.09 4.54q-.33.73-1.13.73H6.3q-.8 0-1.13-.73l-2.09-4.54q-.33-.73.47-.73m1.7 3h13.5m-12.25 3l-1.75 5m12.75-5l1.75 5");
}
</style><path class="u9wu764zr"/>`,
		"fallback": "iconoven:feed-trough",
	});
}

export default Component;
