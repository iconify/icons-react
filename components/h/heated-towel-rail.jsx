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
		"content": `<style>.hqbci9hri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5v-16m14 0v16M5 9h14M5 17h14M8 9v5h8V9m-8 8v4.5h8V17M9.5 6.5q-1.25-1 0-2t0-2m5 4q-1.25-1 0-2t0-2");
}
</style><path class="hqbci9hri"/>`,
		"fallback": "uix-sharp:heated-towel-rail",
	});
}

export default Component;
