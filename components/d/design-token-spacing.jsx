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
		"content": `<style>.ka_x2k8rq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5za2 2 0 0 1 2 2v13a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2m15 0za2 2 0 0 1 2 2v13a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2M11.25 10l-2 2l2 2m-2-2h5.5m-2-2l2 2l-2 2");
}
</style><path class="ka_x2k8rq"/>`,
		"fallback": "uix:design-token-spacing",
	});
}

export default Component;
