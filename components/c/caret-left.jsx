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
		"content": `<style>.yzpxu8upg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.684 10.901l3.295-3.06A1.5 1.5 0 0 1 14.5 8.94v6.12a1.5 1.5 0 0 1-2.521 1.099l-3.295-3.06a1.5 1.5 0 0 1 0-2.198");
}
</style><path class="yzpxu8upg"/>`,
		"fallback": "uix:caret-left",
	});
}

export default Component;
