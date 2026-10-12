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
		"content": `<style>.w7_77lgut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.25 3.5l5 10h11.5m-11.5 0L6 19.5m12.75-6l1.75 6m-11.25-6l5.5 6m-12 1.75h18.5");
}
</style><path class="w7_77lgut"/>`,
		"fallback": "iconoven:deck-chair",
	});
}

export default Component;
