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
		"content": `<style>.j19i-pxvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.41 4.458L12 2.5L20.25 7v9.303m-4.655 3.236L12 21.5L3.75 17V7.692m10.447 2.61L20.25 7M12 15.9v5.6m-8.5-18l17 17");
}
</style><path class="j19i-pxvd"/>`,
		"fallback": "uix-sharp:block-x",
	});
}

export default Component;
