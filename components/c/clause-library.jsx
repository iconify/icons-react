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
		"content": `<style>.iegkzv6eh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18v3.5H3Zm1.5 3.5v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7M4.75 9V5h3v4m2.75 0V3h3v6m2.75 0V4.5h3V9M10 16.5h4");
}
</style><path class="iegkzv6eh"/>`,
		"fallback": "uix-sharp:clause-library",
	});
}

export default Component;
