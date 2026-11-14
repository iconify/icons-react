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
		"content": `<style>.pivql6y5u {
  d: path("M2 3.5h20v14H2Zm5 14l-1 3m11-3l1 3");
}

.uevxkub9s {
  d: path("M9 6.25v8.5l7.5-4.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pivql6y5u"/><path class="uevxkub9s"/></g>`,
		"fallback": "uix-sharp:category-tv-video",
	});
}

export default Component;
