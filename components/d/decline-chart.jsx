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
		"content": `<style>.aa8dbmbdf {
  d: path("M20 8.5V13h-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n6thrcckn {
  d: path("M5.5 20.5V11m5.5 9.5V14m5.5 6.5V17M3.5 4l7 6.5l3.5-3l6 5.5");
}
</style><g class="hntgybcog"><path class="n6thrcckn"/><path class="aa8dbmbdf"/></g>`,
		"fallback": "uix:decline-chart",
	});
}

export default Component;
