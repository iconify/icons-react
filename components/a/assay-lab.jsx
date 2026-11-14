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
		"content": `<style>.lmmewachf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5V8L4 20h16L14 8V2.5m-5.5 0h7M2.5 20h19M7 14h10");
}
</style><path class="lmmewachf"/>`,
		"fallback": "uix:assay-lab",
	});
}

export default Component;
