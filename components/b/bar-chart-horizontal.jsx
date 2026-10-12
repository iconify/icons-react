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
		"content": `<style>.ds8we6g8d {
  width: 9px;
  height: 3.25px;
  x: 3.75px;
  y: 4.5px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mcgjkfzkj {
  width: 12px;
  height: 3.25px;
  x: 3.75px;
  y: 16px;
  rx: 1px;
}

.tx0543giw {
  width: 16.5px;
  height: 3.25px;
  x: 3.75px;
  y: 10.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="ds8we6g8d"/><rect class="tx0543giw"/><rect class="mcgjkfzkj"/></g>`,
		"fallback": "iconoven:bar-chart-horizontal",
	});
}

export default Component;
