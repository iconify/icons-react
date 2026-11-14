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
		"content": `<style>.evcqq5heq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5v-16C8.5 2.5 13 7 19 3v3L7.5 21.5Zm3.5-17v15m3-14.75V16m3-11.25V12");
}
</style><path class="evcqq5heq"/>`,
		"fallback": "uix:harp-celtic",
	});
}

export default Component;
