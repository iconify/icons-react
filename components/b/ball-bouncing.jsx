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
		"content": `<style>.wkr2gobgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M3 5.5c1.5 6.5 2.5 13 4 13c1.25 0 2-2 3-4.5m-7 7.5h18");
}
</style><path class="wkr2gobgu"/>`,
		"fallback": "uix:ball-bouncing",
	});
}

export default Component;
