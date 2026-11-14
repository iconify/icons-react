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
		"content": `<style>.mdzp2ybok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><path class="mdzp2ybok"/>`,
		"fallback": "uix:degree-symbol",
	});
}

export default Component;
