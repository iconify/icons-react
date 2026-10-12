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
		"content": `<style>.drvn0pbow {
  d: path("M5 16v-2.75a7 5 0 0 1 14 0V16Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ip_69lbjo {
  width: 16px;
  height: 5px;
  x: 4px;
  y: 16px;
  rx: 1.5px;
}

.qbzx7tbaa {
  d: path("M10.5 17.25v2.5m3-2.5v2.5");
}

.u0vqaccvq {
  cx: 12px;
  cy: 6.5px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="u0vqaccvq"/><path class="drvn0pbow"/><rect class="ip_69lbjo"/><path class="qbzx7tbaa"/></g>`,
		"fallback": "iconoven:beanie",
	});
}

export default Component;
