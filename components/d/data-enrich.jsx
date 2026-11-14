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
		"content": `<style>.z4h05bbsg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5V7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 7v-.5A3.5 3.5 0 0 1 6 3m3 0v7.5M15 3v7.5m3 3.75c.25 2.5 1.25 3.5 3.75 3.75c-2.5.25-3.5 1.25-3.75 3.75c-.25-2.5-1.25-3.5-3.75-3.75c2.5-.25 3.5-1.25 3.75-3.75");
}
</style><path class="z4h05bbsg"/>`,
		"fallback": "uix:data-enrich",
	});
}

export default Component;
