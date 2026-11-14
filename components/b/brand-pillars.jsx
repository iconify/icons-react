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
		"content": `<style>.xr8mekb_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18M6.5 6.25v8.5m5.5-8.5v8.5m5.5-8.5v8.5m-13 2.75h15m-17 3h19");
}
</style><path class="xr8mekb_h"/>`,
		"fallback": "uix:brand-pillars",
	});
}

export default Component;
