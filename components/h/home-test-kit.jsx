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
		"content": `<style>.bbx-qwb_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 11h15v9a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20Zm0 0l-2-3.75H6L7.75 11Zm15 0l2-3.75H18L16.25 11ZM9.75 3h4.5M10.5 3v8m3-8v8");
}
</style><path class="bbx-qwb_u"/>`,
		"fallback": "uix-sharp:home-test-kit",
	});
}

export default Component;
