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
		"content": `<style>.izu2u5bob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.5L13.5 9c1.5-2 1-6.5-2.5-6.5S7 7 8.5 9l4.934 6.676M18 15v6m-3-3h6");
}
</style><path class="izu2u5bob"/>`,
		"fallback": "uix:awareness-ribbon-double",
	});
}

export default Component;
