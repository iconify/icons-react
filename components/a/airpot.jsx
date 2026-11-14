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
		"content": `<style>.qcwr4bbqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5H15v13H4.5Zm0 0l2-3H13l2 3m-7.5-3v-3h7m.5 8h2.5L20 8");
}
</style><path class="qcwr4bbqr"/>`,
		"fallback": "uix-sharp:airpot",
	});
}

export default Component;
