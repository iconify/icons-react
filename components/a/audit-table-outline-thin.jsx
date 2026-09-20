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
		"content": `<style>.dznv025mt {
  d: path("M6 14h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ox73jyb9b {
  d: path("M5.5 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.x50q_4bdr {
  d: path("M3 10h18");
}

.y5iyq7b9t {
  d: path("m14 16 2 2 3 -3");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="zrwkhybyf"/><path class="x50q_4bdr"/><path class="ox73jyb9b"/><path class="dznv025mt"/><path class="y5iyq7b9t"/></g>`,
		"fallback": "iconmind:audit-table-outline-thin",
	});
}

export default Component;
