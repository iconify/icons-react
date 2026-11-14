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
		"content": `<style>.jlg-rjbkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 6h.25A2.625 2.625 0 0 1 10 8.625v8.25A2.625 2.625 0 0 1 7.375 19.5h-.25A2.625 2.625 0 0 1 4.5 16.875v-8.25A2.625 2.625 0 0 1 7.125 6m9.5 0h.25A2.625 2.625 0 0 1 19.5 8.625v3.25a2.625 2.625 0 0 1-2.625 2.625h-.25A2.625 2.625 0 0 1 14 11.875v-3.25A2.625 2.625 0 0 1 16.625 6M2.5 3h19");
}
</style><path class="jlg-rjbkj"/>`,
		"fallback": "uix:align-top",
	});
}

export default Component;
