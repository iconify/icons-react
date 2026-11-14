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
		"content": `<style>.o7osxsb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9.5h12a3.5 3.5 0 0 1 3.5 3.5v4.5A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5V13A3.5 3.5 0 0 1 6 9.5m.5 0V4a1 1 0 0 1 1-1h8l2 2v4.5M6 13v4.5m7-4h.01m3.49 0h.01M13 17h.01m3.49 0h.01");
}
</style><path class="o7osxsb7x"/>`,
		"fallback": "uix:fax-machine",
	});
}

export default Component;
