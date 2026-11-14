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
		"content": `<style>.bzh62rbuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7h12a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 7m1 2.75v4.5M4.75 12h4.5M11 13h2m3 0h.01m2.74-2h.01");
}
</style><path class="bzh62rbuc"/>`,
		"fallback": "uix:game-controller-retro",
	});
}

export default Component;
