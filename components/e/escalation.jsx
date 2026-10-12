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
		"content": `<style>.f41to9bop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.75H8V16h5.25v-4.75h5.25m0 0V3m-2.75 2.75L18.5 3l2.75 2.75");
}
</style><path class="f41to9bop"/>`,
		"fallback": "iconoven:escalation",
	});
}

export default Component;
