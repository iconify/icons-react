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
		"content": `<style>.nu-f3dbgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.5A2.5 2.5 0 1 1 8 6h8a2.5 2.5 0 1 1 2.5 2.5M8 6v11.5M16 6v11.5m-10 0h12a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 19A1.5 1.5 0 0 1 6 17.5");
}
</style><path class="nu-f3dbgu"/>`,
		"fallback": "uix:column-ionic",
	});
}

export default Component;
