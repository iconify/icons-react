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
		"content": `<style>.i-ofju80c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8.25h5A1.75 1.75 0 0 1 11.5 10v1.25A1.75 1.75 0 0 1 9.75 13h-5A1.75 1.75 0 0 1 3 11.25V10a1.75 1.75 0 0 1 1.75-1.75M2.5 16h19m-7-5.25H21M18.25 8L21 10.75l-2.75 2.75");
}
</style><path class="i-ofju80c"/>`,
		"fallback": "uix:air-track",
	});
}

export default Component;
