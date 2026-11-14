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
		"content": `<style>.yboio7buw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.6 20.5H3.5v-18H18v9.1M7 15.5l3-8m1 8l3-8m5.5 6.75a2.5 2.5 0 1 0 2.25 2.25m-4.25 2L15 21");
}
</style><path class="yboio7buw"/>`,
		"fallback": "uix-sharp:code-comment-fixme",
	});
}

export default Component;
