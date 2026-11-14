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
		"content": `<style>.b6z6fl-2e {
  d: path("M12 14.75V6.5c0-1.75.75-3 2.5-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l4i_rrd9h {
  d: path("M2.5 8h6.75m5.5 0h6.75M9.25 8v8c0 3.75 5.5 3.75 5.5 0V8");
}

.x2936ibnv {
  fill: currentColor;
  d: path("M10.5 16.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="l4i_rrd9h"/><path class="x2936ibnv"/><path class="b6z6fl-2e"/></g>`,
		"fallback": "uix:hair-follicle",
	});
}

export default Component;
