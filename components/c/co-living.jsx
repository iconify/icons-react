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
		"content": `<style>.rqv8nys0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19M16 5v16.5M4.75 8h9.5A1.75 1.75 0 0 1 16 9.75a1.75 1.75 0 0 1-1.75 1.75h-9.5A1.75 1.75 0 0 1 3 9.75A1.75 1.75 0 0 1 4.75 8m0 8.5h9.5A1.75 1.75 0 0 1 16 18.25A1.75 1.75 0 0 1 14.25 20h-9.5A1.75 1.75 0 0 1 3 18.25a1.75 1.75 0 0 1 1.75-1.75m1.5-11h1.5A1.25 1.25 0 0 1 9 6.75A1.25 1.25 0 0 1 7.75 8h-1.5A1.25 1.25 0 0 1 5 6.75A1.25 1.25 0 0 1 6.25 5.5m0 8.5h1.5A1.25 1.25 0 0 1 9 15.25a1.25 1.25 0 0 1-1.25 1.25h-1.5A1.25 1.25 0 0 1 5 15.25A1.25 1.25 0 0 1 6.25 14M20.5 8v13.5M16 11.75h4.5M16 15h4.5");
}
</style><path class="rqv8nys0w"/>`,
		"fallback": "uix:co-living",
	});
}

export default Component;
