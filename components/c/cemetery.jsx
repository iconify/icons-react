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
		"content": `<style>.tfn_fo-wg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V8a4 4 0 0 1 8 0v12.5m2.75 0V12a3.25 3.25 0 0 1 6.5 0v8.5m-18.25 0h19M7.5 7v7M6.25 9.5h2.5");
}
</style><path class="tfn_fo-wg"/>`,
		"fallback": "uix:cemetery",
	});
}

export default Component;
