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
		"content": `<style>.c9mbpcbhk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 16.5l3.25-14h2.5l3.25 14m-12 0h15M9.25 9l6.5 4.5m-1-4.5l-6.5 4.5m2 3V19L12 21.5l1.75-2.5v-2.5");
}
</style><path class="c9mbpcbhk"/>`,
		"fallback": "uix:fracking",
	});
}

export default Component;
