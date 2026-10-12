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
		"content": `<style>.w2qfoh4li {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 16v-5.5a1.25 1.25 0 0 1 2.5 0V14h1.75a2.5 2.5 0 0 1 2.5 2.5v.5A4.25 4.25 0 0 1 16 21.25h-.75a3.75 3.75 0 0 1-3.75-3.75V17a1 1 0 0 1 1-1Zm2.5-1.5v2.25M18.25 5h-14m2.5-2.25L4.25 5l2.5 2.25");
}
</style><path class="w2qfoh4li"/>`,
		"fallback": "iconoven:hand-swipe-left",
	});
}

export default Component;
