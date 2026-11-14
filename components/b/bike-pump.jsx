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
		"content": `<style>.gjml-lj0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6za2 2 0 0 1 2 2v11a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2M4 3h11M9.5 3v3m-5 15H14M11.5 8.5c5.5 0 7 3.5 7 8.5m0 0za1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="gjml-lj0s"/>`,
		"fallback": "uix:bike-pump",
	});
}

export default Component;
