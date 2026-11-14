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
		"content": `<style>.qm1p4tjil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4h10v9q0 4-4 4h-2q-4 0-4-4Zm10 3h1a2.5 2.5 0 0 1 0 5h-1m-14 5h19Q20 20.5 12 20.5T2.5 17");
}
</style><path class="qm1p4tjil"/>`,
		"fallback": "uix:for-here-mug",
	});
}

export default Component;
