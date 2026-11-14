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
		"content": `<style>.b2y93vbfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5h8A4.5 4.5 0 0 1 16 12v1.5m-8-6v-3m-2.5 0h5m8.531 7.25a3.5 3.5 0 0 1 0 3.5m2.165-4.75a6 6 0 0 1 0 6");
}
</style><path class="b2y93vbfz"/>`,
		"fallback": "uix:faucet-touchless",
	});
}

export default Component;
