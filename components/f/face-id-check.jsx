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
		"content": `<style>.lju333bel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2M8 20.5H6A2.5 2.5 0 0 1 3.5 18v-2M9 8.5h.01m5.99 0h.01M12 8.5V12h-1m-1.5 2.25c1.25 1.25 3.75 1.25 5 0m.25 3.75l2 2L21 15.75");
}
</style><path class="lju333bel"/>`,
		"fallback": "uix:face-id-check",
	});
}

export default Component;
