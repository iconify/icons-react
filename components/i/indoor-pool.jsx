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
		"content": `<style>.hrpvl4bxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15q3-2.25 6 0t6 0t6 0M8 3.5V11m8-7.5V11M8 6h8M8 9h8M3 19.5h18");
}
</style><path class="hrpvl4bxs"/>`,
		"fallback": "uix:indoor-pool",
	});
}

export default Component;
