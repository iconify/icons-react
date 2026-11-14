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
		"content": `<style>.hc59w9bts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5v19m0-18H20v8H7.5m-3 10h9m-3-10V16q0 2.5-3 2.5");
}
</style><path class="hc59w9bts"/>`,
		"fallback": "uix-sharp:flag-hoist",
	});
}

export default Component;
