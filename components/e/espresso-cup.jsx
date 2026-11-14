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
		"content": `<style>.x6fbtothy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5.5h12v6A5.5 5.5 0 0 1 11 17h-1a5.5 5.5 0 0 1-5.5-5.5ZM3 17h18q-1.5 2.5-4 2.5H7q-2.5 0-4-2.5m13.5-9.5h1a2.5 2.5 0 0 1 0 5h-1");
}
</style><path class="x6fbtothy"/>`,
		"fallback": "uix:espresso-cup",
	});
}

export default Component;
