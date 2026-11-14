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
		"content": `<style>.bsb-mu96k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5h17c0 4-3.5 6-8.5 6s-8.5-2-8.5-6m2 0C7 8 10 5.5 12 5.5s5 2.5 6.5 7m1-4.5h.01m1.99 2.5h.01");
}
</style><path class="bsb-mu96k"/>`,
		"fallback": "uix:carbon-black",
	});
}

export default Component;
