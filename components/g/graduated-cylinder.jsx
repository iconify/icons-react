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
		"content": `<style>.z-ojocmuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h1.5v16L7 21h10l-2.5-2.5v-16M9.5 7h2.25M9.5 10.5h2.25M9.5 14h2.25");
}
</style><path class="z-ojocmuq"/>`,
		"fallback": "uix:graduated-cylinder",
	});
}

export default Component;
