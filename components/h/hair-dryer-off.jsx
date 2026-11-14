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
		"content": `<style>.fjk7dtbpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4h7l2 1.5v5L14 12H7a4 4 0 0 1 0-8m1.25 8zA1.75 1.75 0 0 1 10 13.75v5a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 8.25 12M16 16a3 3 0 1 0 4.5 0m-2.25-2v3.5");
}
</style><path class="fjk7dtbpi"/>`,
		"fallback": "uix:hair-dryer-off",
	});
}

export default Component;
