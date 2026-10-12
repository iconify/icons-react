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
		"content": `<style>.bopak3bua {
  cx: 12px;
  cy: 16.75px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rrzohjbez {
  d: path("M12 12v3");
}

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}

.zt548wbiy {
  cx: 12px;
  cy: 8.75px;
  r: 3.25px;
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><circle class="zt548wbiy"/><path class="rrzohjbez"/><circle class="bopak3bua"/></g>`,
		"fallback": "iconoven:birth-certificate",
	});
}

export default Component;
