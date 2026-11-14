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
		"content": `<style>.zi5zlqgbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12.5C5 11 3 8.75 3 6.5a3.5 3.5 0 0 1 7 0c0 2.25-2 4.5-3.5 6m11 3.5C16 14.5 14 12.25 14 10a3.5 3.5 0 0 1 7 0c0 2.25-2 4.5-3.5 6m-11-.75c0 5.75 11 5.75 11 3.75");
}
</style><path class="zi5zlqgbz"/>`,
		"fallback": "uix:distance-run",
	});
}

export default Component;
