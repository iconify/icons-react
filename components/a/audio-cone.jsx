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
		"content": `<style>.ljyb1bk2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9za2.5 2.5 0 0 1 2.5 2.5v1A2.5 2.5 0 0 1 5 15a2.5 2.5 0 0 1-2.5-2.5v-1A2.5 2.5 0 0 1 5 9m2.5 1.5L19 3M7.5 13.5L19 21m-5.221-10.682a6.5 6.5 0 0 1 0 3.364m4.658-5.236a11.5 11.5 0 0 1 0 7.108");
}
</style><path class="ljyb1bk2x"/>`,
		"fallback": "uix:audio-cone",
	});
}

export default Component;
