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
		"content": `<style>.pdmtu9bkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 3.75L6 13.25m6-9.5l-1.25 9.5m-7-6.5h9.5m-10 4h9.5M15.5 14h-1a3 3 0 0 0 0 6h1m1.75-6h1a3 3 0 0 1 0 6h-1m-2.5-3H18");
}
</style><path class="pdmtu9bkp"/>`,
		"fallback": "iconoven:anchor-link",
	});
}

export default Component;
