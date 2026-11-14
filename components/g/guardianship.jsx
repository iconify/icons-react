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
		"content": `<style>.kabvq1bxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-1.75 13c0-4 2.25-6.5 5.25-6.5s5.25 2.5 5.25 6.5M16.25 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-.5 8.25c0-2 1-3.25 2.75-3.25s2.75 1.25 2.75 3.25");
}
</style><path class="kabvq1bxp"/>`,
		"fallback": "uix:guardianship",
	});
}

export default Component;
