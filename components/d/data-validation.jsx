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
		"content": `<style>.xemlnsxdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5L5 9l2.5-3M11 7.5h9.5m-17 5L5 14l2.5-3m3.5 1.5h9.5M3.5 17L5 18.5l2.5-3M11 17h6");
}
</style><path class="xemlnsxdl"/>`,
		"fallback": "uix-sharp:data-validation",
	});
}

export default Component;
