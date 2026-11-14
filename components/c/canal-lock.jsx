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
		"content": `<style>.e22370anx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3H5a1.5 1.5 0 0 1 1.5 1.5v14A1.5 1.5 0 0 1 5 20h-.5A1.5 1.5 0 0 1 3 18.5v-14A1.5 1.5 0 0 1 4.5 3M19 3h.5A1.5 1.5 0 0 1 21 4.5v14a1.5 1.5 0 0 1-1.5 1.5H19a1.5 1.5 0 0 1-1.5-1.5v-14A1.5 1.5 0 0 1 19 3M6.5 20h11m-11-9q2.75-1.5 5.5 0t5.5 0");
}
</style><path class="e22370anx"/>`,
		"fallback": "uix:canal-lock",
	});
}

export default Component;
