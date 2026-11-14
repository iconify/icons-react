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
		"content": `<style>.ezq8iaczp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v3.1m0 7.8v2.6M10 3h.01m3.49 14.4v4.1h-7v-5h6.1m-9.1-13l17 17");
}
</style><path class="ezq8iaczp"/>`,
		"fallback": "uix-sharp:antenna-off",
	});
}

export default Component;
