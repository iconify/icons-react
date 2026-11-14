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
		"content": `<style>.byllvdrrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M2.5 20.5c0-4 2.25-6.5 5.25-6.5c1.81 0 3.347.91 4.282 2.511M15.25 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-.717 6.415c.141-.681.726-1.089 1.581-1.281m-1.387 4.921l2.25-2.1a1.5 1.5 0 0 1 2.046 0l2.25 2.1a1.5 1.5 0 0 1 .477 1.097v1.598a1.5 1.5 0 0 1-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5v-1.598a1.5 1.5 0 0 1 .477-1.097");
}
</style><path class="byllvdrrq"/>`,
		"fallback": "uix:displaced-family",
	});
}

export default Component;
