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
		"content": `<style>.cloneaclo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13.75h12a3.5 3.5 0 0 1 3.5 3.5v.25A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-.25a3.5 3.5 0 0 1 3.5-3.5m6-9.25c-1.75-1.25-4.75-1.75-7.5-1.25V10c2.75-.5 5.75-.25 7.5 1c1.75-1.25 4.75-1.5 7.5-1V3.25c-2.75-.5-5.75 0-7.5 1.25m0 0V11m-6 6.5h8m4 0h.01");
}
</style><path class="cloneaclo"/>`,
		"fallback": "uix:book-scanner-flatbed",
	});
}

export default Component;
