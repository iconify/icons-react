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
		"content": `<style>.bs41d9oln {
  d: path("m3 3 5 5");
}

.erdfj7vbx {
  d: path("M10.5 7v3.5H7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_nzgwnjk {
  d: path("m21 21 -5 -5");
}

.vtgsa7bep {
  d: path("M13.5 17v-3.5H17");
}
</style><g class="hntgybcog"><path class="bs41d9oln"/><path class="erdfj7vbx"/><path class="o_nzgwnjk"/><path class="vtgsa7bep"/></g>`,
		"fallback": "iconmind:conflict-outline-thin",
	});
}

export default Component;
