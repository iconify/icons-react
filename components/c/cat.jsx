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
		"content": `<style>.ep9s8kcmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13V3.5l5 4h5l5-4V13a7.5 7.5 0 0 1-15 0M9 13h.01M15 13h.01");
}
</style><path class="ep9s8kcmq"/>`,
		"fallback": "uix:cat",
	});
}

export default Component;
