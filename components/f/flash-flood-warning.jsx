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
		"content": `<style>.l95jaobun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16c3.5 0 5-3 6-6.5c1-4 3.5-6.5 7-6.5s6 2.5 6 5.5c0 2-2 3.25-3.75 3s-2.25-1.5-1.25-3M2.5 20H13m5-5.25v3.5M18 21h.01");
}
</style><path class="l95jaobun"/>`,
		"fallback": "uix:flash-flood-warning",
	});
}

export default Component;
