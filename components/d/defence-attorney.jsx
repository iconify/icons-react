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
		"content": `<style>.h9okzrros {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3v17M8 20h4.9M4.5 4.5h12M2 10l2.5-5.5L7 10a2.5 2.5 0 0 1-5 0Zm12 0l2.5-5.5L19 10a2.5 2.5 0 0 1-5 0Zm4.5 5l3 1.25v2.25c0 2-1.5 3-3 3.5c-1.5-.5-3-1.5-3-3.5v-2.25Z");
}
</style><path class="h9okzrros"/>`,
		"fallback": "uix-sharp:defence-attorney",
	});
}

export default Component;
