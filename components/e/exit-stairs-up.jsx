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
		"content": `<style>.paq6ojbht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h5v-4h5v-4h5V9h4M9 13V3M6 5.75l3-3l3 3");
}
</style><path class="paq6ojbht"/>`,
		"fallback": "uix:exit-stairs-up",
	});
}

export default Component;
