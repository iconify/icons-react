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
		"content": `<style>.px8-k1bus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 6h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 8.25A2.25 2.25 0 0 1 4.75 6M5 10.5V18m3.5-7.5V18m3.5-7.5V18m3.5-7.5V18m3.5-7.5V18");
}
</style><path class="px8-k1bus"/>`,
		"fallback": "uix:comb-wide-tooth",
	});
}

export default Component;
