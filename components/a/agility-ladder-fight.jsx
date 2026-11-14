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
		"content": `<style>.fm9vggazo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21L8 3m13 18L16 3M4.25 16.5h15.5M5.5 12h13M6.75 7.5h10.5");
}
</style><path class="fm9vggazo"/>`,
		"fallback": "uix:agility-ladder-fight",
	});
}

export default Component;
