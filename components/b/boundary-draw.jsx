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
		"content": `<style>.he1-g8bdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.349 5H9.83a1.75 1.75 0 0 1 1.713 1.389l1.263 6a1.75 1.75 0 0 1-1.713 2.111H4.77a1.75 1.75 0 0 1-1.692-2.195l1.579-6A1.75 1.75 0 0 1 6.349 5M16.5 18.75l-.25-3.25L19 10l3 1.5l-2.75 5.5Zm-14 0h14m-.25-3.25l3 1.5");
}
</style><path class="he1-g8bdx"/>`,
		"fallback": "uix:boundary-draw",
	});
}

export default Component;
