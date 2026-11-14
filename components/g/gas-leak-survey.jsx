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
		"content": `<style>.jd5kd8b4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h8m-8 6h8m3-6h8m-8 6h8M12 11za1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 12 21a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 12 11m0-3q-1.75-1.5 0-3t0-2.5");
}
</style><path class="jd5kd8b4u"/>`,
		"fallback": "uix:gas-leak-survey",
	});
}

export default Component;
