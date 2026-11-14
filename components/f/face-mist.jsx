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
		"content": `<style>.fgmkmsbla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11h2.5a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-3.5A3.5 3.5 0 0 1 7 11m-1.5 0V7.5a2 2 0 0 1 2-2h7V9H10v2m7.25-5.75l2.25-1.5m-2 3.5h3.25m-3.5 2l2.25 1.5");
}
</style><path class="fgmkmsbla"/>`,
		"fallback": "uix:face-mist",
	});
}

export default Component;
