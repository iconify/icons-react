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
		"content": `<style>.v3wpi3bzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5A3.5 3.5 0 0 1 18 6v7a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 13V6a3.5 3.5 0 0 1 3.5-3.5m2.5 14v5m-4 0h8m-7-12h6");
}
</style><path class="v3wpi3bzv"/>`,
		"fallback": "uix:digital-signage",
	});
}

export default Component;
