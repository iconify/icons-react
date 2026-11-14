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
		"content": `<style>.ietdjmmzm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3.5 21c0-4 3.5-6.5 7.5-6.5c1.293 0 2.533.261 3.62.75M15 18h6");
}
</style><path class="ietdjmmzm"/>`,
		"fallback": "uix-sharp:attendee-remove",
	});
}

export default Component;
