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
		"content": `<style>.v2-bewvph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5.75l3.587-2.192a1.75 1.75 0 0 1 1.826 0L16.5 5.75a1.484 1.484 0 0 1-.774 2.75H8.274A1.484 1.484 0 0 1 7.5 5.75m-1 5.5v6.25m5.5-6.25v6.25m5.5-6.25v1.4M3 20.5h9.7m8.3.5l-5.5-5.5m0 5v-5h5");
}
</style><path class="v2-bewvph"/>`,
		"fallback": "uix:cash-flow-financing",
	});
}

export default Component;
