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
		"content": `<style>.gon7akb3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5H3v8h3.5M3 7.5h3m3.5-4v8H13m2-8h6m-3 0v8m-15 6h17.5m-3-3l3 3l-3 3");
}
</style><path class="gon7akb3w"/>`,
		"fallback": "uix:elt",
	});
}

export default Component;
