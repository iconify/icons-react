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
		"content": `<style>.gxrypgb9m {
  width: 13px;
  height: 6px;
  x: 5.5px;
  y: 2.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j27ge1erz {
  cx: 5.83px;
  cy: 13.5px;
  r: 1.75px;
}

.nw8c9yb7d {
  cx: 12px;
  cy: 13.5px;
  r: 1.75px;
}

.pvqx9m57v {
  cx: 18.17px;
  cy: 13.5px;
  r: 1.75px;
}

.s_o3yib6o {
  d: path("M2.75 21.25a3.08 3.08 0 0 1 6.17 0a3.08 3.08 0 0 1 6.17 0a3.08 3.08 0 0 1 6.17 0");
}
</style><g class="hntgybcog"><circle class="j27ge1erz"/><circle class="nw8c9yb7d"/><circle class="pvqx9m57v"/><path class="s_o3yib6o"/><rect class="gxrypgb9m"/></g>`,
		"fallback": "iconoven:audience",
	});
}

export default Component;
