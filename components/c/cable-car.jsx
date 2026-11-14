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
		"content": `<style>.ygr61zxru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 6l19-2M4 5.75V21.5M20 4.25V21.5M11 10h2a3.5 3.5 0 0 1 3.5 3.5v2A3.5 3.5 0 0 1 13 19h-2a3.5 3.5 0 0 1-3.5-3.5v-2A3.5 3.5 0 0 1 11 10m1-5v5m-4.5 3.5h9");
}
</style><path class="ygr61zxru"/>`,
		"fallback": "uix:cable-car",
	});
}

export default Component;
