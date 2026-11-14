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
		"content": `<style>.iwnjyg4qt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.5h10.5A1.75 1.75 0 0 1 19 4.25A1.75 1.75 0 0 1 17.25 6H6.75A1.75 1.75 0 0 1 5 4.25A1.75 1.75 0 0 1 6.75 2.5M5 6l-.75 15h6.25L12 11l1.5 10h6.25L19 6M4.5 18h6.25m2.5 0h6.25");
}
</style><path class="iwnjyg4qt"/>`,
		"fallback": "uix:fencing-breeches",
	});
}

export default Component;
