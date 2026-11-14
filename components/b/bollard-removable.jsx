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
		"content": `<style>.xq0337b8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15V6.5a2.5 2.5 0 0 1 5 0V15Zm-3.5 4h3v2.5h6V19h10M17 15.5V5m-2.75 2.75L17 5l2.75 2.75");
}
</style><path class="xq0337b8a"/>`,
		"fallback": "uix:bollard-removable",
	});
}

export default Component;
