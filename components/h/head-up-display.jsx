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
		"content": `<style>.ju4fn7xou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 18l2-11q6.5-2 13 0l2 11q-8.5-1.5-17 0M8 13.5h8M9 11v2.5m3-3.75v3.75m3-2.5v2.5");
}
</style><path class="ju4fn7xou"/>`,
		"fallback": "uix:head-up-display",
	});
}

export default Component;
