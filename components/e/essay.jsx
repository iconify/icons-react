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
		"content": `<style>.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uizqtzbii {
  d: path("M9.25 6.75h5.5m-5 3.5h6.5m-8.5 3.25h8.5M7.75 17h5.75");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><path class="uizqtzbii"/></g>`,
		"fallback": "iconoven:essay",
	});
}

export default Component;
