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
		"content": `<style>.l97qxpbxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 21.5V6a3.5 3.5 0 0 1 7 0m0 0v2.5l1.75 2l-1.75 2l1.75 2l-1.75 2v5");
}
</style><path class="l97qxpbxz"/>`,
		"fallback": "uix:bobby-pin",
	});
}

export default Component;
