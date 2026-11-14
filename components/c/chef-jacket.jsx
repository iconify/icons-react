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
		"content": `<style>.cmdyspssh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3.5L12 7l3.5-3.5l5.5 3l-1.5 5.5l-2.5-1v9.5H7V11l-2.5 1L3 6.5Zm3.5 8h.01m-.01 4h.01");
}
</style><path class="cmdyspssh"/>`,
		"fallback": "uix:chef-jacket",
	});
}

export default Component;
