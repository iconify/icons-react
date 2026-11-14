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
		"content": `<style>.d8b66x2_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.5h14.5A1.75 1.75 0 0 1 21 5.25v1A1.75 1.75 0 0 1 19.25 8H4.75A1.75 1.75 0 0 1 3 6.25v-1A1.75 1.75 0 0 1 4.75 3.5M4.5 8v9A1.5 1.5 0 0 0 6 18.5h12a1.5 1.5 0 0 0 1.5-1.5V8m-17 13.5h19m-12-9h5");
}
</style><path class="d8b66x2_q"/>`,
		"fallback": "uix:deal-archive",
	});
}

export default Component;
