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
		"content": `<style>.mo6jxacxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.125 2.5h3.75A2.625 2.625 0 0 1 16.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 7.5 18.875V5.125A2.625 2.625 0 0 1 10.125 2.5M7.5 6.5h5m-5 4h3m-3 4h5m-5 4h3");
}
</style><path class="mo6jxacxm"/>`,
		"fallback": "uix:graduated-scale",
	});
}

export default Component;
