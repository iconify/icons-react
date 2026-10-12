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
		"content": `<style>.cnnvb8bod {
  width: 2.5px;
  height: 8px;
  x: 10.75px;
  y: 8px;
  rx: 1.25px;
}

.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.shvec_xgt {
  cx: 12px;
  cy: 12px;
  r: 6.5px;
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><circle class="shvec_xgt"/><rect class="cnnvb8bod"/></g>`,
		"fallback": "iconoven:coin-game",
	});
}

export default Component;
