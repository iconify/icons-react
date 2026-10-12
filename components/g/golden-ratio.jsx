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
		"content": `<style>.emwyyxxra {
  width: 18px;
  height: 11px;
  x: 3px;
  y: 6px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u4i2b-b7m {
  d: path("M14 6v11m-8 0a8 8 0 0 1 8-8");
}
</style><g class="hntgybcog"><rect class="emwyyxxra"/><path class="u4i2b-b7m"/></g>`,
		"fallback": "iconoven:golden-ratio",
	});
}

export default Component;
