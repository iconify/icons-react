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
		"content": `<style>.sjlir8r9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 21c0-4 3.25-6.5 7.5-6.5c1.458 0 2.743.278 3.854.717M18 15v6m-3-3h6");
}
</style><path class="sjlir8r9e"/>`,
		"fallback": "uix-sharp:follow-team",
	});
}

export default Component;
