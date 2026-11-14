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
		"content": `<style>.mnm0j3lnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5L12 5l2.5-2.5L17 3l3.5 7.5l-2.25 1l-1.5-3v13H13l-1-8l-1 8H7.25v-13l-1.5 3l-2.25-1L7 3Zm-2.25 7h9.5M7.25 18h9.5");
}
</style><path class="mnm0j3lnx"/>`,
		"fallback": "uix:hi-vis-coveralls",
	});
}

export default Component;
