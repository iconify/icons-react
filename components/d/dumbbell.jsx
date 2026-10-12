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
		"content": `<style>.hjbepcb0w {
  d: path("M2.75 12h2m14.5 0h2m-12.5 0h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.po_89gbqo {
  width: 4px;
  height: 13.5px;
  x: 15.25px;
  y: 5.25px;
  rx: 1.5px;
}

.qmoqc5bhg {
  width: 4px;
  height: 13.5px;
  x: 4.75px;
  y: 5.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="qmoqc5bhg"/><rect class="po_89gbqo"/><path class="hjbepcb0w"/></g>`,
		"fallback": "iconoven:dumbbell",
	});
}

export default Component;
