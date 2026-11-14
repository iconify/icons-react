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
		"content": `<style>.ndcf-zjfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 17.5l6-6m3-3l6-6m-13 17l6-6m3-3l6-6m-13 17l6-6m3-3l6-6M7.757 8.464l.707-.707a1.75 1.75 0 0 1 2.475 0l5.304 5.304a1.75 1.75 0 0 1 0 2.475l-.707.707a1.75 1.75 0 0 1-2.475 0l-5.304-5.304a1.75 1.75 0 0 1 0-2.475");
}
</style><path class="ndcf-zjfv"/>`,
		"fallback": "uix:double-pointed-needles",
	});
}

export default Component;
