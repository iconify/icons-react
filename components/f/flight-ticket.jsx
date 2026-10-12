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
		"content": `<style>.vp0ydn-aj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25a2 2 0 0 1 2-2h14.5a2 2 0 0 1 2 2v2.5a2.25 2.25 0 0 0 0 4.5v2.5a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2v-2.5a2.25 2.25 0 0 0 0-4.5ZM8 12h8m-2.5 0L11 8.5m2.5 3.5L11 15.5M9.5 12l-1-1.75m1 1.75l-1 1.75");
}
</style><path class="vp0ydn-aj"/>`,
		"fallback": "iconoven:flight-ticket",
	});
}

export default Component;
