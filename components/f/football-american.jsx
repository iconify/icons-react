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
		"content": `<style>.z-ouog3mi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19.5c0-9.5 5.5-15 15-15c0 9.5-5.5 15-15 15Zm5-5l5-5m-4.75 2.75l2 2m.5-4.5l2 2");
}
</style><path class="z-ouog3mi"/>`,
		"fallback": "uix-sharp:football-american",
	});
}

export default Component;
