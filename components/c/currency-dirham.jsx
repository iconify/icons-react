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
		"content": `<style>.lqedrkb-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5h3c4.5 0 7 3 7 7s-2.5 7-7 7H8Zm-3 5h15M5 14h15");
}
</style><path class="lqedrkb-n"/>`,
		"fallback": "uix:currency-dirham",
	});
}

export default Component;
