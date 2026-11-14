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
		"content": `<style>.faxkww5gs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7.5l1.5-1c0-2 3-2 3 .25L8 9c2.5-1.25 6.5-1.25 9 0l4 .5l-1.5 3c0 4.5-3 6.5-7 6.5c-4.5 0-7-2.5-6.75-6.5L5.25 9L4.5 8ZM10.5 19v2.5m4-2.5v2.5M11 13h.01m3.99-.5h.01M13.5 16h.01");
}
</style><path class="faxkww5gs"/>`,
		"fallback": "uix:guinea-fowl",
	});
}

export default Component;
