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
		"content": `<style>.qrr1ssb5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19m17-19v19M7.133 8.101l4.75-2.145A1.5 1.5 0 0 1 14 7.323v8.709a1.5 1.5 0 0 1-.883 1.367l-4.75 2.145a1.5 1.5 0 0 1-2.117-1.367V9.468a1.5 1.5 0 0 1 .883-1.367M10.25 6.75v12");
}
</style><path class="qrr1ssb5w"/>`,
		"fallback": "uix:gate-open",
	});
}

export default Component;
