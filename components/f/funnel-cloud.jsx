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
		"content": `<style>.h0e2epb7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9.5a2.5 2.5 0 0 1 0-5H9a3.5 3.5 0 0 1 6 0h3.5a2.5 2.5 0 0 1 0 5Zm3 0c1 4.5 4.5 5.5 5 9c-.5-3.5 1-5.5 2-9M4 21.5h16");
}
</style><path class="h0e2epb7d"/>`,
		"fallback": "uix:funnel-cloud",
	});
}

export default Component;
