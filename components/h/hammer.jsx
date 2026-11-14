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
		"content": `<style>.inbdasb5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5A1.5 1.5 0 0 1 5 3h9c3 0 5.5 1.5 6.5 4.5c-2-1-4-1-6.5 0v1H5A1.5 1.5 0 0 1 3.5 7Zm7.5 4za2 2 0 0 1 2 2v9a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2");
}
</style><path class="inbdasb5m"/>`,
		"fallback": "uix:hammer",
	});
}

export default Component;
