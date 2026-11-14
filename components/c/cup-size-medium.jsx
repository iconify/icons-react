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
		"content": `<style>.tatj5ib8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6h11A1.5 1.5 0 0 1 19 7.5A1.5 1.5 0 0 1 17.5 9h-11A1.5 1.5 0 0 1 5 7.5A1.5 1.5 0 0 1 6.5 6m1 0l1-2.5h7l1 2.5m-10 3L8 21h8l1.5-12");
}
</style><path class="tatj5ib8t"/>`,
		"fallback": "uix:cup-size-medium",
	});
}

export default Component;
