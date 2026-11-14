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
		"content": `<style>.f3s53mblo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.5 4.75l5.75 10M20 12l-.75 2.75L16.5 14m1.5 3.5H6m2.75-2.75L6 17.5l2.75 2.75m-4-5.5l6-10.5M8 5l2.75-.75L11.5 7");
}
</style><path class="f3s53mblo"/>`,
		"fallback": "uix:cycle-three",
	});
}

export default Component;
