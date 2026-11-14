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
		"content": `<style>.jdq53ekru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m13 0h6");
}
</style><path class="jdq53ekru"/>`,
		"fallback": "uix:frying-pan",
	});
}

export default Component;
