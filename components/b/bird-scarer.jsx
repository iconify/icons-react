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
		"content": `<style>.j_uygfblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5v-6a3 3 0 0 1 0 6m0 0h6a3 3 0 0 1-6 0m0 0v6a3 3 0 0 1 0-6m0 0H6a3 3 0 0 1 6 0m0 6v7");
}
</style><path class="j_uygfblr"/>`,
		"fallback": "uix:bird-scarer",
	});
}

export default Component;
