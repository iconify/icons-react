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
		"content": `<style>.sdy80l8cx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.515 6.371l6.217 10.753a1.75 1.75 0 0 1-1.515 2.626H5.783a1.75 1.75 0 0 1-1.515-2.626l6.217-10.753a1.75 1.75 0 0 1 3.03 0M9 19.75v-3m3 3v-5m3 5v-3");
}
</style><path class="sdy80l8cx"/>`,
		"fallback": "uix:architect-scale",
	});
}

export default Component;
