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
		"content": `<style>.zyp45ybnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.625 4.5h8.25A2.625 2.625 0 0 1 19.5 7.125v.25A2.625 2.625 0 0 1 16.875 10h-8.25A2.625 2.625 0 0 1 6 7.375v-.25A2.625 2.625 0 0 1 8.625 4.5m0 9.5h3.25a2.625 2.625 0 0 1 2.625 2.625v.25a2.625 2.625 0 0 1-2.625 2.625h-3.25A2.625 2.625 0 0 1 6 16.875v-.25A2.625 2.625 0 0 1 8.625 14M3 2.5v19");
}
</style><path class="zyp45ybnf"/>`,
		"fallback": "uix:align-left",
	});
}

export default Component;
