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
		"content": `<style>.x2j4of_vo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.5C8.75 6 7 8.5 7 12.5s1.5 6.5 2 9m6.25-19c0 3.5 1.75 6 1.75 10s-1.5 6.5-2 9M12 13h.01m6.49-.5h3M20 11l1.5 1.5L20 14M5.5 12.5h-3M4 11l-1.5 1.5L4 14");
}
</style><path class="x2j4of_vo"/>`,
		"fallback": "uix:bloating",
	});
}

export default Component;
