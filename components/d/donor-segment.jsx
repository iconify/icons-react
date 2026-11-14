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
		"content": `<style>.hz368yb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 13.5A7.5 7.5 0 1 1 10.5 6v4a3.5 3.5 0 1 0 3.5 3.5ZM13.25 3.25a7.5 7.5 0 0 1 7.5 7.5h-4a3.5 3.5 0 0 0-3.5-3.5Z");
}
</style><path class="hz368yb0g"/>`,
		"fallback": "uix:donor-segment",
	});
}

export default Component;
