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
		"content": `<style>.v8jwszlbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19m-18 0v17m17-17v17M11 4h2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 13 7h-2a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 11 4m1 3v6m0 0v2.5a2 2 0 1 1-2 2");
}
</style><path class="v8jwszlbk"/>`,
		"fallback": "uix:bridge-crane",
	});
}

export default Component;
