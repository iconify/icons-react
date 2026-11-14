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
		"content": `<style>.a6eym7job {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.045 16.419L16.419 4.045a2.5 2.5 0 0 1 3.536 0a2.5 2.5 0 0 1 0 3.536L7.581 19.955a2.5 2.5 0 0 1-3.536 0a2.5 2.5 0 0 1 0-3.536M15.25 8.75l1.5-1.5M7 17h.01m2.24-2.25h.01m2.24-2.25h.01");
}
</style><path class="a6eym7job"/>`,
		"fallback": "uix:flute",
	});
}

export default Component;
