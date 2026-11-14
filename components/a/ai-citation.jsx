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
		"content": `<style>.bkj0h7ecu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 7h-5v5.5h4c0 2.5-1 4-3 5M19.5 7h-5v5.5h4c0 2.5-1 4-3 5");
}
</style><path class="bkj0h7ecu"/>`,
		"fallback": "uix:ai-citation",
	});
}

export default Component;
