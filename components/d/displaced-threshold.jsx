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
		"content": `<style>.qddlxh47i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5v19m12-19v19M9 2.75v5m3-5v5m3-5v5M6 10.5h12M12 21v-7.75m-2.5 2.5l2.5-2.5l2.5 2.5");
}
</style><path class="qddlxh47i"/>`,
		"fallback": "uix:displaced-threshold",
	});
}

export default Component;
