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
		"content": `<style>.oo50evbtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 21.5h9m-6.25 0L12 9l1.75 12.5M12 2.5zA1.5 1.5 0 0 1 13.5 4v3.5A1.5 1.5 0 0 1 12 9a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 12 2.5m-5.75 1zA1.5 1.5 0 0 1 7.75 5v2a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 4.75 7V5a1.5 1.5 0 0 1 1.5-1.5m11.5 0za1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="oo50evbtm"/>`,
		"fallback": "uix:cell-tower-monopole",
	});
}

export default Component;
