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
		"content": `<style>.m9anurb3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.671 3.585l5.146 2.573a1.5 1.5 0 0 1 0 2.684l-5.146 2.573a1.5 1.5 0 0 1-1.342 0L6.183 8.842a1.5 1.5 0 0 1 0-2.684l5.146-2.573a1.5 1.5 0 0 1 1.342 0M3.5 12l8.5 4.25L20.5 12m-17 4.5l8.5 4.25l8.5-4.25m-10-9.75l3 1.5");
}
</style><path class="m9anurb3g"/>`,
		"fallback": "uix:composite-layers",
	});
}

export default Component;
