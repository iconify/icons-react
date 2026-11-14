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
		"content": `<style>.py-6y_b3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h18l-2.5 5.5h-13Zm3.5-5.5h1A1.5 1.5 0 0 1 9 11v2.5A1.5 1.5 0 0 1 7.5 15h-1A1.5 1.5 0 0 1 5 13.5V11a1.5 1.5 0 0 1 1.5-1.5m5 0h1A1.5 1.5 0 0 1 14 11v2.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V11a1.5 1.5 0 0 1 1.5-1.5m5 0h1A1.5 1.5 0 0 1 19 11v2.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V11a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="py-6y_b3d"/>`,
		"fallback": "uix:cargo-ship",
	});
}

export default Component;
