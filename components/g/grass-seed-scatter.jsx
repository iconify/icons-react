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
		"content": `<style>.yj_d42y4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21c0-6-1-12 .5-17M10 21c-.5-5-4-9-7-11m7 11c.5-5 3-9 6-11m2-5.5h.01m2.49 5h.01M19.5 15h.01");
}
</style><path class="yj_d42y4x"/>`,
		"fallback": "uix:grass-seed-scatter",
	});
}

export default Component;
