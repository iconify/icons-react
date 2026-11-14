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
		"content": `<style>.slz38tbob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.3 18H2.5V2.5H18v8.8M14 17a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm5.25 2.25l2.25 2.25");
}
</style><path class="slz38tbob"/>`,
		"fallback": "uix-sharp:inspect-element",
	});
}

export default Component;
