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
		"content": `<style>.fqi3c0bnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.344 20.5H3.5v-10L12 3.25l8.5 7.25v.956m1 5.044a2.25 2.25 0 1 1-2.25-2.25M17.75 18l-3.25 3.25");
}
</style><path class="fqi3c0bnr"/>`,
		"fallback": "uix-sharp:cause-disaster-recovery",
	});
}

export default Component;
