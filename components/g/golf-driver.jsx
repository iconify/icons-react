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
		"content": `<style>.v7y19lnlk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.5 2.5l-9 13m0 0c-3-1.25-8.5 0-8.5 3.25c0 2 2 2.75 5 2.75h3.5c1.25 0 1.75-1 1.25-2Zm5-11l2.75 2");
}
</style><path class="v7y19lnlk"/>`,
		"fallback": "uix:golf-driver",
	});
}

export default Component;
