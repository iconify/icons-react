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
		"content": `<style>.vecpz3b_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 13l.75-5.5a2 2 0 0 1 2.4-1.7l2.35.7l2.35-.7a2 2 0 0 1 2.4 1.7l.75 5.5Zm.5-2.5h10m-14.25 6c0-1 1-1.5 2-1.15C7 16.1 9.25 16.5 12 16.5s5-.4 7.25-1.15c1-.35 2 .15 2 1.15c0 2-4.1 3.5-9.25 3.5s-9.25-1.5-9.25-3.5");
}
</style><path class="vecpz3b_b"/>`,
		"fallback": "iconoven:fedora",
	});
}

export default Component;
