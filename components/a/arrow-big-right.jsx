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
		"content": `<style>.v08-3ib_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.644 13.856l-4.553 4.553a.932.932 0 0 1-1.591-.659a2.25 2.25 0 0 0-2.25-2.25H6.125A2.625 2.625 0 0 1 3.5 12.875v-1.75A2.625 2.625 0 0 1 6.125 8.5h4.125a2.25 2.25 0 0 0 2.25-2.25a.932.932 0 0 1 1.591-.659l4.553 4.553a2.625 2.625 0 0 1 0 3.712");
}
</style><path class="v08-3ib_t"/>`,
		"fallback": "uix:arrow-big-right",
	});
}

export default Component;
