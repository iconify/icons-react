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
		"content": `<style>.sw8_bgbvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 12h7m-6 0V7.5a2.5 2.5 0 0 1 5 0V12m4.5 0h7m-6 0V7.5a2.5 2.5 0 0 1 5 0V12m-13 0v3c0 6 10.5 6 10.5 0v-3");
}
</style><path class="sw8_bgbvt"/>`,
		"fallback": "uix:earplugs-concert",
	});
}

export default Component;
