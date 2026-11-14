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
		"content": `<style>.uw01jfrdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18m-16 0L4.5 20q2.75-1.5 5 .5q2.5-2 5 0q2.25-2 5-.5L19 3.5M9.5 7v9.5m5-9.5v9.5");
}
</style><path class="uw01jfrdt"/>`,
		"fallback": "uix:backdrop-cloth",
	});
}

export default Component;
