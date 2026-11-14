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
		"content": `<style>.bfjr-5byz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10c0 5 2 8 4.5 8c2.25 0 3.5-2.25 3.5-4.5m9-3.5c0 5-2 8-4.5 8c-2.25 0-3.5-2.25-3.5-4.5m-8-8h15");
}
</style><path class="bfjr-5byz"/>`,
		"fallback": "uix:breast",
	});
}

export default Component;
