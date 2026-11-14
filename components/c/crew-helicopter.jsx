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

.oknwglbdo {
  d: path("M7 9.5h8c3 0 5.5 2 5.5 4.5c0 1.5-1 2.5-2.5 2.5H9c-1.5 0-2-1-2-2.5Zm0 3H2.5m0-2.5v4.5M5 6h15m-7 0v3.5M8.5 20H19m-8.5-3.5V20m6.5-3.5V20");
}

.z8g6qkfgh {
  d: path("M16 10.5c1.75.5 3 1.5 3.5 3H16Z");
}
</style><g class="hntgybcog"><path class="oknwglbdo"/><path class="z8g6qkfgh"/></g>`,
		"fallback": "uix:crew-helicopter",
	});
}

export default Component;
