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
		"content": `<style>.dhbuh497h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5zA3.5 3.5 0 0 1 10.5 7A3.5 3.5 0 0 1 7 10.5A3.5 3.5 0 0 1 3.5 7A3.5 3.5 0 0 1 7 3.5m0 10za3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 7 20.5A3.5 3.5 0 0 1 3.5 17A3.5 3.5 0 0 1 7 13.5m10 0za3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5m0-10v7M13.5 7h7");
}
</style><path class="dhbuh497h"/>`,
		"fallback": "uix:apps-add",
	});
}

export default Component;
