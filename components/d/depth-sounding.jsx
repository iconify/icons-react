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
		"content": `<style>.z9949yxrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10l-2 3.5H9m-6.5 0h19M9 10a4 4 0 0 0 6 0m-9 3.5a8 8 0 0 0 12 0m-15.5 7l4.5-1l5 1l4.5-1.5l5 1");
}
</style><path class="z9949yxrs"/>`,
		"fallback": "uix:depth-sounding",
	});
}

export default Component;
