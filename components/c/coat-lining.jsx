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

.o-463n6sr {
  d: path("M8.5 3L12 9.5V21m2.875-14.75l-.442 2.3a1.75 1.75 0 0 0 .524 1.61l1.168 1.09a.758.758 0 0 0 1.253-.738l-1.075-4.301a.731.731 0 0 0-1.428.039");
}

.poya2xbms {
  d: path("m8.5 3l-5 2.5V21h17V5.5l-5-2.5");
}
</style><g class="hntgybcog"><path class="poya2xbms"/><path class="o-463n6sr"/></g>`,
		"fallback": "uix:coat-lining",
	});
}

export default Component;
