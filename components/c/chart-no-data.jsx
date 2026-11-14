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
		"content": `<style>.f9y8953ps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.9v15.6h15.6M8 16.5V12m4.5 4.5v-2.6m4.5-3.3V9.5M5.5 3L21 18.5");
}
</style><path class="f9y8953ps"/>`,
		"fallback": "uix:chart-no-data",
	});
}

export default Component;
