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
		"content": `<style>.umq37ccev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.75h19M4.5 17v-2.25l3.5-1l1.5-1.25h5l1.5 1.25l3.5 1V17Zm-2 3h19M12 3.5V7M9.75 4.75L12 7l2.25-2.25");
}
</style><path class="umq37ccev"/>`,
		"fallback": "uix:car-crusher",
	});
}

export default Component;
