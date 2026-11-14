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
		"content": `<style>.h2qsadcrv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 2.5v2.25m8.25 2.5l-2 1.25m2 8.25l-2-1.25m-6.25 6v-2.25m-8.25-2.5l2-1.25m-2-8.25l2 1.25M12 12l2.75-2.75L13 11z");
}
</style><path class="h2qsadcrv"/>`,
		"fallback": "uix:altimeter",
	});
}

export default Component;
