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
		"content": `<style>.d0i-b5b0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.575 16.95l3.927-3.927a3 3 0 0 0 .256-.298l6.027-8.169a2.625 2.625 0 0 1 3.969-.298l.988.988a2.625 2.625 0 0 1-.298 3.969l-8.169 6.027a3 3 0 0 0-.298.256L7.05 19.425a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475m-2.121.353l4.243 4.243");
}
</style><path class="d0i-b5b0k"/>`,
		"fallback": "uix:baseball-bat",
	});
}

export default Component;
