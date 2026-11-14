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
		"content": `<style>.xjrb-qich {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5v-3h14v3l2 16h-7.5L12 11l-1.5 10.5H3zh14M8.25 10l-.75 7m8.25-7l.75 7");
}
</style><path class="xjrb-qich"/>`,
		"fallback": "uix:hakama",
	});
}

export default Component;
