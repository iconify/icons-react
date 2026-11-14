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
		"content": `<style>.ozpmvpriv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5V20m0-4h18M7.5 16v-3.5q2.5-2 5 0t5 0q2-1.5 3.5 0v7q-1.25 1.5-2.5 0");
}
</style><path class="ozpmvpriv"/>`,
		"fallback": "uix:bed-unmade",
	});
}

export default Component;
