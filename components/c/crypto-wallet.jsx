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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lzm_61bas {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 2.5px;
}

.pf9x1hbtk {
  d: path("M16.75 10.25h4.5v5.5h-4.5a2.75 2.75 0 0 1 0-5.5m-8.5-.75l3 1.75v3.5l-3 1.75l-3-1.75v-3.5Z");
}
</style><g class="hntgybcog"><rect class="lzm_61bas"/><path class="pf9x1hbtk"/></g>`,
		"fallback": "iconoven:crypto-wallet",
	});
}

export default Component;
