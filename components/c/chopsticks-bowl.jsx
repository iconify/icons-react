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
		"content": `<style>.bgnwyacra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19a9.5 8 0 0 1-19 0M9 12l7.5-9.5M13 12l8-8");
}
</style><path class="bgnwyacra"/>`,
		"fallback": "uix:chopsticks-bowl",
	});
}

export default Component;
