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
		"content": `<style>.cgnqjrbuu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18.5v-10a3 3 0 0 1 6 0a3 3 0 0 1 6 0a3 3 0 0 1 6 0v10M9 8.5v10m6-10v10m-12.5 0h19");
}
</style><path class="cgnqjrbuu"/>`,
		"fallback": "uix:arcade-arches",
	});
}

export default Component;
