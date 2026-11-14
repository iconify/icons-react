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
		"content": `<style>.hmsm8ib9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 6.25a6 6 0 0 0 8.5 8.5ZM10 16.5v5m-4 0h8.5m-.5 0a4 4 0 0 0-1.25-2.75M12.5 8l2-2m2-2L18 2.5");
}
</style><path class="hmsm8ib9t"/>`,
		"fallback": "uix:dish-alignment",
	});
}

export default Component;
