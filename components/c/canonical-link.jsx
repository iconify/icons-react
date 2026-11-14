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
		"content": `<style>.o66hm_bmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 10.25L4 13a3.5 3.5 0 0 0 5 5l2.75-2.75m3.5-3.5L18 9a3.5 3.5 0 0 0-5-5l-2.75 2.75m-2.5 7.5l6.5-6.5m.5 10.25l2 2L21 15.75");
}
</style><path class="o66hm_bmk"/>`,
		"fallback": "uix-sharp:canonical-link",
	});
}

export default Component;
