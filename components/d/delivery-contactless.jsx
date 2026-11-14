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
		"content": `<style>.r6tcf3r8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 17.5H2.5V3h15v6.7M2.5 8h15M10 3v5m4.5 13.75V15.5a1.25 1.25 0 0 1 2.5 0v-1.75a1.25 1.25 0 0 1 2.5 0v1.75a1.25 1.25 0 0 1 2.5 0v3.25a3 3 0 0 1-3 3Z");
}
</style><path class="r6tcf3r8r"/>`,
		"fallback": "uix-sharp:delivery-contactless",
	});
}

export default Component;
