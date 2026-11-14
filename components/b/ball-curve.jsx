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
		"content": `<style>.n8hykiktk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M2.5 21c7.5-.5 1.5-8 7-9");
}
</style><path class="n8hykiktk"/>`,
		"fallback": "uix:ball-curve",
	});
}

export default Component;
