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
		"content": `<style>.duo-1eb2o {
  cx: 6.5px;
  cy: 18.75px;
  r: 2.25px;
}

.f9xu_cb8q {
  cx: 6.5px;
  cy: 5.25px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kjhqaea1x {
  d: path("M6.5 7.5v9m11-7.5v1.25a3.5 3.5 0 0 1-3.5 3.5h-4a3.5 3.5 0 0 0-3.5 3");
}

.tbkljbcex {
  cx: 17.5px;
  cy: 6.75px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="f9xu_cb8q"/><circle class="duo-1eb2o"/><circle class="tbkljbcex"/><path class="kjhqaea1x"/></g>`,
		"fallback": "iconoven:git-branch",
	});
}

export default Component;
