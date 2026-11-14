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
		"content": `<style>.wzbos6ygq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12a5.5 4.5 0 1 0 11 0a5.5 4.5 0 1 0-11 0Zm0 0l-4-4.5l1.25 2.25L2.5 12l1.25 2.25L2.5 16.5Zm11 0l4-4.5l-1.25 2.25L21.5 12l-1.25 2.25l1.25 2.25Z");
}
</style><path class="wzbos6ygq"/>`,
		"fallback": "uix-sharp:flow-wrapper",
	});
}

export default Component;
