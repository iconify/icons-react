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
		"content": `<style>.jjpp8p2cm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 16.79V10l-.66-2.41a2.25 2.25 0 1 1 .36-2.71L13 4.25l1.563-.032l-.313 1.532l-1 3v8.04a2.1 2.1 0 1 1-1.25 2.6a2.1 2.1 0 1 1-1.25-2.6Z");
}
</style><path class="jjpp8p2cm"/>`,
		"fallback": "iconoven:femur-bone-sharp",
	});
}

export default Component;
