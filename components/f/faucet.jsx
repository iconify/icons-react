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
		"content": `<style>.tqu3-ji4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5h11a5 5 0 0 1 5 5v2h-4v-2a1 1 0 0 0-1-1H4Zm6 0v-3m-2.5 0h5m5.5 13l1.75 3a2 2 0 1 1-3.5 0Z");
}
</style><path class="tqu3-ji4k"/>`,
		"fallback": "uix:faucet",
	});
}

export default Component;
