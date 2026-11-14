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
		"content": `<style>.xr-4s0bje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11v9.5m-4 0h8M4 11h16M3 7.5h6m-3 0V11m9-3.5h6m-3 0V11M5.5 3h1A1.5 1.5 0 0 1 8 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 4 6V4.5A1.5 1.5 0 0 1 5.5 3m12 0h1A1.5 1.5 0 0 1 20 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 16 6V4.5A1.5 1.5 0 0 1 17.5 3");
}
</style><path class="xr-4s0bje"/>`,
		"fallback": "uix:balance-equal",
	});
}

export default Component;
