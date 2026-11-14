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
		"content": `<style>.n-06hhb-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6v12M21 6v12M10.125 9h3.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 13.875 15h-3.75A2.625 2.625 0 0 1 7.5 12.375v-.75A2.625 2.625 0 0 1 10.125 9M3 12h4.5m9 0H21");
}
</style><path class="n-06hhb-k"/>`,
		"fallback": "uix:constraint-left-right",
	});
}

export default Component;
