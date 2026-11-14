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
		"content": `<style>.jact5ijhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21M7 17L20 5M9 10.5h.01m4.99 5h.01M14.5 6h.01m3.99 4.5h.01");
}
</style><path class="jact5ijhp"/>`,
		"fallback": "uix:correlation",
	});
}

export default Component;
