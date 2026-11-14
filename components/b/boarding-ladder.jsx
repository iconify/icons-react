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
		"content": `<style>.kbk5qqg9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h19m-17 2.5V5.25a1.75 1.75 0 0 1 3.5 0V21.5m11.5-13V5.25a1.75 1.75 0 0 0-3.5 0V21.5m-8-11h8m-8 4h8m-8 4h8");
}
</style><path class="kbk5qqg9s"/>`,
		"fallback": "uix:boarding-ladder",
	});
}

export default Component;
