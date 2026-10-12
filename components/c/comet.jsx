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
		"content": `<style>.aeip39b0i {
  cx: 16px;
  cy: 8px;
  r: 4.25px;
}

.afqmklkxw {
  d: path("m3.75 20.25l7.5-7.5m-2 7.5L14.5 15m-10.75-.25L9 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="aeip39b0i"/><path class="afqmklkxw"/></g>`,
		"fallback": "iconoven:comet",
	});
}

export default Component;
