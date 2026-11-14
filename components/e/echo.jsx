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
		"content": `<style>.odwsndn8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.75H5L8 6.5v11l-3-3.25H2.5ZM21.5 3v18M11.005 8.995a4.25 4.25 0 0 1 0 6.01m6.201 1.495a9 9 0 0 1 0-9");
}
</style><path class="odwsndn8h"/>`,
		"fallback": "uix:echo",
	});
}

export default Component;
