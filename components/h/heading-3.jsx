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
		"content": `<style>.ss2wjtjec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5v14m8-14v14m-8-7h8m4.25-1.75C16.25 9.5 17 9 18 9c1.25 0 2.25.75 2.25 2.25s-1 2.5-2.75 2.5c2 0 3 1 3 2.5C20.5 18 19.25 19 17.75 19c-1 0-1.75-.5-2.25-1.25");
}
</style><path class="ss2wjtjec"/>`,
		"fallback": "uix:heading-3",
	});
}

export default Component;
