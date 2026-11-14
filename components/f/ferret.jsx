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
		"content": `<style>.untevbc5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 12c-1-3.5-3.5-5.5-6.5-5s-4.5 3.5-7.5 3.5c-2 0-3.5-1-5-2.5C3 11.5 5 14.5 8 14.5s4.5-1.5 7.5-1.5c2.5 0 4.5 0 6-1M9 14.5L8 18m7.5-5l1 4m1-7h.01");
}
</style><path class="untevbc5e"/>`,
		"fallback": "uix:ferret",
	});
}

export default Component;
