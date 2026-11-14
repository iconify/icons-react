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
		"content": `<style>.jt_afbc_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 15.5c.5-4 2.5-7 5-8.25L11 3.5l2.75 2.75c1.75-.25 3.25 0 4.5 1L20.5 8.5v.75L18 9.5c-4-.5-7.25 1.5-9.25 6.25ZM3 19.25q3-2 6 0t6 0t6 0");
}
</style><path class="jt_afbc_x"/>`,
		"fallback": "uix:bottlenose-dolphin",
	});
}

export default Component;
