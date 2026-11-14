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
		"content": `<style>.j_zvq8bvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17l-7 7.5h-3Zm7 11l-5 5m0-4v4h4m4-5l5 5m-4 0h4v-4");
}
</style><path class="j_zvq8bvr"/>`,
		"fallback": "uix-sharp:funnel-split",
	});
}

export default Component;
