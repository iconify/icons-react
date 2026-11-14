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
		"content": `<style>.kzhqhkyjx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.856 4.356l2.788 2.788a2.625 2.625 0 0 1 0 3.712l-2.788 2.788a2.625 2.625 0 0 1-3.712 0l-2.788-2.788a2.625 2.625 0 0 1 0-3.712l2.788-2.788a2.625 2.625 0 0 1 3.712 0M11.75 12.25L3.5 20.5m8.25-14.75l6.5 6.5m0-6.5l-6.5 6.5");
}
</style><path class="kzhqhkyjx"/>`,
		"fallback": "uix:fly-swatter",
	});
}

export default Component;
