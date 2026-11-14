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
		"content": `<style>.gk0n7bbxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 6.5h5.5a5.25 5.25 0 0 1 5.25 5.25v.5a5.25 5.25 0 0 1-5.25 5.25h-5.5a5.25 5.25 0 0 1-5.25-5.25v-.5A5.25 5.25 0 0 1 7.75 6.5M21 10v4M6.5 10.25v3.5");
}
</style><path class="gk0n7bbxu"/>`,
		"fallback": "uix:burnout-battery",
	});
}

export default Component;
