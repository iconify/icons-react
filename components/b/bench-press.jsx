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
		"content": `<style>.jcti4lb3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5.5V12m0 3v6M17 5.5V12m0 3v6M2.5 5.5h19M4 3v5m16-5v5M5 12h14a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 19 15H5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 5 12m7 3v6");
}
</style><path class="jcti4lb3b"/>`,
		"fallback": "uix:bench-press",
	});
}

export default Component;
