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
		"content": `<style>.licl6tbho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v1A3.5 3.5 0 0 1 18 12H6a3.5 3.5 0 0 1-3.5-3.5v-1A3.5 3.5 0 0 1 6 4m-.5 5h13m-10 6v5.5m-2-2l2 2l2-2m5-3.5v5.5m-2-2l2 2l2-2");
}
</style><path class="licl6tbho"/>`,
		"fallback": "uix:air-conditioner",
	});
}

export default Component;
