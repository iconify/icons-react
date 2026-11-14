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
		"content": `<style>.vnrw5n9jx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h11m-9.75 0v11a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2v-11M6 5.5h14.5m-1.75 0v7M11 5.5V3h4.5v2.5m0 10l5 5m0-5l-5 5");
}
</style><path class="vnrw5n9jx"/>`,
		"fallback": "uix:delete-all",
	});
}

export default Component;
