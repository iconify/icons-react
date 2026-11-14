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
		"content": `<style>.adw7jhb4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5C4 20.5 5 6 8 6s3 9 4 9s1-6.5 4-6.5s4 12 5.5 12");
}
</style><path class="adw7jhb4e"/>`,
		"fallback": "uix:bimodal-distribution",
	});
}

export default Component;
