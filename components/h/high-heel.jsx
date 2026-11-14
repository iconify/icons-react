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
		"content": `<style>.dv13qmbnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 19h4c4 0 7-7.5 11-8h2V5h-1.5c-2.5 0-5 9-10.5 9H5.5q-3 0-3 3q0 2 1.5 2m16.5-8v9.5");
}
</style><path class="dv13qmbnk"/>`,
		"fallback": "uix:high-heel",
	});
}

export default Component;
