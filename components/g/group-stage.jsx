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
		"content": `<style>.ylbgonbiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h1A3.5 3.5 0 0 1 10.5 6v1A3.5 3.5 0 0 1 7 10.5H6A3.5 3.5 0 0 1 2.5 7V6A3.5 3.5 0 0 1 6 2.5m11 0h1A3.5 3.5 0 0 1 21.5 6v1a3.5 3.5 0 0 1-3.5 3.5h-1A3.5 3.5 0 0 1 13.5 7V6A3.5 3.5 0 0 1 17 2.5m-11 11h1a3.5 3.5 0 0 1 3.5 3.5v1A3.5 3.5 0 0 1 7 21.5H6A3.5 3.5 0 0 1 2.5 18v-1A3.5 3.5 0 0 1 6 13.5m11 0h1a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5h-1a3.5 3.5 0 0 1-3.5-3.5v-1a3.5 3.5 0 0 1 3.5-3.5m-11.5-7h2m9 0h2m-13 11h2m9 0h2");
}
</style><path class="ylbgonbiq"/>`,
		"fallback": "uix:group-stage",
	});
}

export default Component;
