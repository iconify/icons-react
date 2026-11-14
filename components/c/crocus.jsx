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
		"content": `<style>.ie3ju9b_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3c-1 5 .5 9 3.5 9s4.5-4 3.5-9C14 4 13 5.5 12 8c-1-2.5-2-4-3.5-5m3.5 9v8m0 0c-2.5-2-5-4-6.5-7.5M12 20c2.5-2 5-4 6.5-7.5M4.5 20h15");
}
</style><path class="ie3ju9b_g"/>`,
		"fallback": "uix:crocus",
	});
}

export default Component;
