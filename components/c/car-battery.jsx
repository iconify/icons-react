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
		"content": `<style>.stzhsebhm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5a2 2 0 0 1 2-2h1V5h3.5v2.5h5V5H18v2.5h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 4h3.5m-1.75-1.75v3.5m6.75-1.75H18");
}
</style><path class="stzhsebhm"/>`,
		"fallback": "uix:car-battery",
	});
}

export default Component;
