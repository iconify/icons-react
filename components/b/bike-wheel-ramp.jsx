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
		"content": `<style>.gagpxubwp {
  d: path("M5.5 15L9 9.25l4.5-1.75l2 3.75m-2-3.75L12.75 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y595pebeh {
  d: path("m2.5 19.5l19-7.5m-19 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm10-3.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="y595pebeh"/><path class="gagpxubwp"/></g>`,
		"fallback": "uix-sharp:bike-wheel-ramp",
	});
}

export default Component;
