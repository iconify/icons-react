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
		"content": `<style>.vop1yybih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 6.5l-8.5-3Q2 9.25 3.5 15l8.5-3l8.5 3q1.5-5.75 0-11.5ZM12 3v18.5");
}
</style><path class="vop1yybih"/>`,
		"fallback": "uix:axe-battle",
	});
}

export default Component;
