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
		"content": `<style>.br3tv2zjn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20C3 12 7.5 5.5 15 4c1 7.5-3.5 14.5-11 16m0 0l6.5-10m6.25 2.5h4.75m-7.25 4h7.25m-12 4H18");
}
</style><path class="br3tv2zjn"/>`,
		"fallback": "uix:fresh-breath",
	});
}

export default Component;
