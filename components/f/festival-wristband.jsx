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
		"content": `<style>.acelcob_j {
  d: path("M10.75 18.25h2.5");
}

.ahkej714i {
  width: 5.5px;
  height: 5.5px;
  x: 9.25px;
  y: 15.5px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ush9cxb5g {
  d: path("M4 11a8 4.5 0 1 0 16 0a8 4.5 0 1 0-16 0m3-.5a5 1.5 0 1 1 10 0a5 1.5 0 1 1-10 0");
}
</style><g class="hntgybcog"><path class="ush9cxb5g"/><rect class="ahkej714i"/><path class="acelcob_j"/></g>`,
		"fallback": "iconoven:festival-wristband",
	});
}

export default Component;
