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
		"content": `<style>.iogctccqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l7.5 3.75L12 10.5L4.5 6.75Zm-7.5 8.75L12 15.5l7.5-3.75m-15 5L12 20.5l7.5-3.75m-17-2.5h19");
}
</style><path class="iogctccqf"/>`,
		"fallback": "uix-sharp:deep-scan",
	});
}

export default Component;
