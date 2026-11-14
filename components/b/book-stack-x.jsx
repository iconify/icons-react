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
		"content": `<style>.saw47101n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h13v6.5H5Zm9.1 14H2.5v-7.5H19v2.6M15 4v6.5m-9 0V18m9.5-2.5l5 5m0-5l-5 5");
}
</style><path class="saw47101n"/>`,
		"fallback": "uix-sharp:book-stack-x",
	});
}

export default Component;
