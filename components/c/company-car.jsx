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
		"content": `<style>.lhxqpc3wl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 10.5l1.25-4c.25-.9 1-1.5 2-1.5h6.5c1 0 1.75.6 2 1.5l1.25 4m-12.25 0h11.5A3.25 3.25 0 0 1 21 13.75A3.25 3.25 0 0 1 17.75 17H6.25A3.25 3.25 0 0 1 3 13.75a3.25 3.25 0 0 1 3.25-3.25M6 17v2.5M18 17v2.5M6.75 13.75h.01m10.49 0h.01M10.5 14h3");
}
</style><path class="lhxqpc3wl"/>`,
		"fallback": "uix:company-car",
	});
}

export default Component;
