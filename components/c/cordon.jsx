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
		"content": `<style>.v0e6p4_qh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5h4m-2 0V4m12 17.5h4m-2 0V4M5 7.5q7 4.5 14 0V11q-7 4.5-14 0Z");
}
</style><path class="v0e6p4_qh"/>`,
		"fallback": "uix-sharp:cordon",
	});
}

export default Component;
