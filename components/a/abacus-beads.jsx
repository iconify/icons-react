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
		"content": `<style>.b897lib7o {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18V6A3.5 3.5 0 0 1 6 2.5M2.5 7.25h19M2.5 12h19m-19 4.75h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ug_tm_3ou {
  d: path("M5.25 7.25a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m7.5 4.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-10.5 4.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="b897lib7o"/><path class="ug_tm_3ou"/></g>`,
		"fallback": "uix:abacus-beads",
	});
}

export default Component;
