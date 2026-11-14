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
		"content": `<style>.y0ztahwqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17.5h.01M7.5 14a2.5 3.5 0 1 0 5 0a2.5 3.5 0 1 0-5 0m7 0a2.5 3.5 0 1 0 5 0a2.5 3.5 0 1 0-5 0M4 6h16m-2.5-2.5L20 6l-2.5 2.5");
}
</style><path class="y0ztahwqq"/>`,
		"fallback": "uix:decimal-increase",
	});
}

export default Component;
