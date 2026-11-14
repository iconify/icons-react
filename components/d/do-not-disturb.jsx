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
		"content": `<style>.leebu_fth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.25 12A6.5 6.5 0 1 1 8.5 4.25A5 5 0 0 0 16.25 12M15 18h6");
}
</style><path class="leebu_fth"/>`,
		"fallback": "uix:do-not-disturb",
	});
}

export default Component;
