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
		"content": `<style>.a91r23v4r {
  d: path("M5.5 2.75h13a2.5 3.75 0 0 1 0 7.5h-13m5 4.75c-4 1-4.5 6.5-1 6.5h5c3.5 0 3-5.5-1-6.5Zm-5-8.5h.01M9.5 13l2.5 2l2.5-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ik140icej {
  d: path("M3 6.5a2.5 3.75 0 1 0 5 0a2.5 3.75 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="ik140icej"/><path class="a91r23v4r"/></g>`,
		"fallback": "uix:bin-bags-roll",
	});
}

export default Component;
