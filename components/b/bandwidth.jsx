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
		"content": `<style>.tgououb5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6v12M21 6v12M6.5 12h11m-8-3l-3 3l3 3m5-6l3 3l-3 3");
}
</style><path class="tgououb5v"/>`,
		"fallback": "uix:bandwidth",
	});
}

export default Component;
