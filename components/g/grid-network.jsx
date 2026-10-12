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
		"content": `<style>.dltwjgb4m {
  d: path("M7.25 5h9.5M5 7.25v9.5m14-9.5v9.5M7.25 19h9.5M13 8.5L10.5 12h3L11 15.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jo45v1frk {
  cx: 19px;
  cy: 5px;
  r: 2.25px;
}

.mc82-xb_k {
  cx: 19px;
  cy: 19px;
  r: 2.25px;
}

.up5bnccaf {
  cx: 5px;
  cy: 5px;
  r: 2.25px;
}

.yohxqabuf {
  cx: 5px;
  cy: 19px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="up5bnccaf"/><circle class="jo45v1frk"/><circle class="yohxqabuf"/><circle class="mc82-xb_k"/><path class="dltwjgb4m"/></g>`,
		"fallback": "iconoven:grid-network",
	});
}

export default Component;
