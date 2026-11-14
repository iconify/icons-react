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
		"content": `<style>.sjxaeccem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm.383-3.332L16.539 2.88a1.5 1.5 0 0 1 1.923.896a1.5 1.5 0 0 1-.897 1.923L4.41 10.487a1.5 1.5 0 0 1-1.923-.897a1.5 1.5 0 0 1 .896-1.922m6.578-2.394l-.383 3.332m5.082-5.042l-.384 3.332");
}
</style><path class="sjxaeccem"/>`,
		"fallback": "uix:clapper-take",
	});
}

export default Component;
