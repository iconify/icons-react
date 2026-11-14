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
		"content": `<style>.w60bnabwc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h19M4 9V6.5l2-2l2 2V9m-5.5 8Q7 12.5 10 9M6.5 21.5Q10 14 12 9m.5 12.5Q13.5 14 14 9m5 12.5Q17 14 16 9");
}
</style><path class="w60bnabwc"/>`,
		"fallback": "uix:farm-land",
	});
}

export default Component;
