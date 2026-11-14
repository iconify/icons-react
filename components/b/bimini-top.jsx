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
		"content": `<style>.v9un28ajl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19c-1 3.5-3 5.5-6.5 5.5H4.5Zm2-7q7.5-3.5 15 0M7 6v8m10-8v8");
}
</style><path class="v9un28ajl"/>`,
		"fallback": "uix:bimini-top",
	});
}

export default Component;
