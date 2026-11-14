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
		"content": `<style>.ipqb66cto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5h5.5A3.5 3.5 0 0 1 15 8.5v7a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5m0 4h5.5M7 12h3.5M6 15h5.5m8.25 4V5m-2 2l2-2l2 2");
}
</style><path class="ipqb66cto"/>`,
		"fallback": "uix:end-credits",
	});
}

export default Component;
