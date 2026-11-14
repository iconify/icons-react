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
		"content": `<style>.jlga5xb5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.802 20.5H10c0-2.25-.5-3.75-1.5-5L6 16c-2 .5-3.25-.75-3-2.5l.25-1L9 5.75L10.75 5l1.5-2.5l2 3c2.841 1.015 4.529 3.676 5.064 7.049M10.5 8.75h.01M18 15v6m-3-3h6");
}
</style><path class="jlga5xb5i"/>`,
		"fallback": "uix:equine-vet",
	});
}

export default Component;
