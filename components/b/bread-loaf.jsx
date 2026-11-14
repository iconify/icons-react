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
		"content": `<style>.ci9cacczg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 19v-5.5C2.75 9.5 6.5 7 12 7s9.25 2.5 9.25 6.5V19Zm3.75-7.5l1.5 2m3.25-2.5l1.5 2M16 11.5l1.5 2");
}
</style><path class="ci9cacczg"/>`,
		"fallback": "uix:bread-loaf",
	});
}

export default Component;
