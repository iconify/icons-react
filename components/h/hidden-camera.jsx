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
		"content": `<style>.ephvlvbiw {
  d: path("M2.75 5.25h18.5m-17.5 3h16.5v1.5a8.25 8.25 0 0 1-16.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wugx_cc9r {
  cx: 12px;
  cy: 13.25px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="ephvlvbiw"/><circle class="wugx_cc9r"/></g>`,
		"fallback": "iconoven:hidden-camera",
	});
}

export default Component;
