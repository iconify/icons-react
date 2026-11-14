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
		"content": `<style>.t6hrsl3oo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h7.75A2.625 2.625 0 0 1 15.5 5.125v7.25A2.625 2.625 0 0 1 12.875 15h-7.75A2.625 2.625 0 0 1 2.5 12.375v-7.25A2.625 2.625 0 0 1 5.125 2.5m-.625 15l-2 1.5l2 1.5m-2-1.5h13m-2-1.5l2 1.5l-2 1.5m4.5-16l1.5-2l1.5 2m-1.5-2V15M18 13l1.5 2l1.5-2");
}
</style><path class="t6hrsl3oo"/>`,
		"fallback": "uix:dimension-measure",
	});
}

export default Component;
