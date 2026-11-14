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
		"content": `<style>.d7to8wz0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 10.5h.5a1.75 1.75 0 0 1 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-.5a1.75 1.75 0 0 1-1.75-1.75v-6.5a1.75 1.75 0 0 1 1.75-1.75m2.25.5l3.75-6.75c.5-1 2.75-.75 2.75 1.25v4h5.75a2 2 0 0 1 2 2.25l-1.25 7a2 2 0 0 1-2 1.75h-11Z");
}
</style><path class="d7to8wz0g"/>`,
		"fallback": "uix:hire-recommend",
	});
}

export default Component;
