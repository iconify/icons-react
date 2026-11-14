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
		"content": `<style>.i08n3bsug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 11.5h15.5a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-2.5a1.75 1.75 0 0 1 1.75-1.75m1.25-2v10m13-10v10M10 2.5C8.5 4.25 11.5 6.25 10 8m4-5.5c-1.5 1.75 1.5 3.75 0 5.5");
}
</style><path class="i08n3bsug"/>`,
		"fallback": "uix:heat-network-pipe",
	});
}

export default Component;
