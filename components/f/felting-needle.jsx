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
		"content": `<style>.pbdw9srqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5C2 17 5 13.5 8 15c1-3 6-3 6.5.5c2.5 0 3 5 .5 5ZM21 3L10.5 15.5");
}
</style><path class="pbdw9srqc"/>`,
		"fallback": "uix:felting-needle",
	});
}

export default Component;
