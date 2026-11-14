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
		"content": `<style>.g2ps8jbse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11 14.25l-7-5.5l4-5.5l7.25 5.25M3 21h18m-10 0q5-7.5 10 0m-7-7.5h.01m3.49-1h.01");
}
</style><path class="g2ps8jbse"/>`,
		"fallback": "uix:holi-color-powder",
	});
}

export default Component;
