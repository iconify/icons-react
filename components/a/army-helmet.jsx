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
		"content": `<style>.zb65m00sn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5C3 8.5 7 4 12 4c4.5 0 7.5 3.5 7.5 7.5l2 2v2Zm4.5 0q1.5 5 7 5");
}
</style><path class="zb65m00sn"/>`,
		"fallback": "uix:army-helmet",
	});
}

export default Component;
