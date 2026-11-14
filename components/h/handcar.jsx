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
		"content": `<style>.qe-dvrv1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19m-17-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 15.5h18m-9 0v-9m-7-3l14 6");
}
</style><path class="qe-dvrv1h"/>`,
		"fallback": "uix:handcar",
	});
}

export default Component;
