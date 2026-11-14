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
		"content": `<style>.eltqa97fk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 11l1 8.5A2 2 0 0 0 8 21h8a2 2 0 0 0 2-1.5l1-8.5M5.25 7.5h13.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 18.75 11H5.25A1.75 1.75 0 0 1 3.5 9.25A1.75 1.75 0 0 1 5.25 7.5m3.25-5c0 2.75 7 2.75 7 0");
}
</style><path class="eltqa97fk"/>`,
		"fallback": "uix:denture-cup",
	});
}

export default Component;
