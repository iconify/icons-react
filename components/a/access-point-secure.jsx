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
		"content": `<style>.b52yv8w1g {
  width: 6px;
  height: 5px;
  x: 9px;
  y: 13.75px;
  rx: 1.25px;
}

.hb_y1exot {
  d: path("M10 13.75V12.5a2 2 0 0 1 4 0v1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rd454dc-j {
  d: path("M2.92 7.25a12 12 0 0 1 18.16 0M7 9.5a7.5 7.5 0 0 1 10 0M5 21.25h14");
}
</style><g class="hntgybcog"><path class="rd454dc-j"/><rect class="b52yv8w1g"/><path class="hb_y1exot"/></g>`,
		"fallback": "iconoven:access-point-secure",
	});
}

export default Component;
