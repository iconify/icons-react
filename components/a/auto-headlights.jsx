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
		"content": `<style>.dqkmr9wok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3.5H9a6.5 6.5 0 0 0 0 13h2Zm3 2L19.5 4M14 10h5.5M15 21.5l3-7l3 7M16.25 19h3.5");
}
</style><path class="dqkmr9wok"/>`,
		"fallback": "uix:auto-headlights",
	});
}

export default Component;
