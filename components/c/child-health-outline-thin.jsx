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
		"content": `<style>.f2m4wubik {
  d: path("M13 12h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hy1q78bil {
  d: path("M8 9v5");
}

.k1llj9blt {
  d: path("M17 8v8");
}

.m0_70pbcq {
  d: path("m4 19 5 -5 5 5");
}

.t_m3g48-w {
  d: path("M5 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="t_m3g48-w"/><path class="hy1q78bil"/><path class="m0_70pbcq"/><path class="k1llj9blt"/><path class="f2m4wubik"/></g>`,
		"fallback": "iconmind:child-health-outline-thin",
	});
}

export default Component;
