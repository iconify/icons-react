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
		"content": `<style>.qojo-2xeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-3 15.5C2.5 17 5 13 8.5 13s6 4 6 8.5m.5-10.33za2 2 0 0 1 2.732.732l3 5.196A2 2 0 0 1 20 19.83a2 2 0 0 1-2.732-.732l-3-5.196A2 2 0 0 1 15 11.17m0 .08L13.5 8.5");
}
</style><path class="qojo-2xeo"/>`,
		"fallback": "uix:cricketer-batting",
	});
}

export default Component;
