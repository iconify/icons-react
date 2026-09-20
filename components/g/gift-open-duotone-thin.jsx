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
		"content": `<style>.c58ve3zov {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 10h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ege_q3bkn {
  d: path("m8 5 2 -2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i18rtibtn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 5 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i7iskytip {
  d: path("m13 6 3 -3");
}

.irf6xy5kk {
  d: path("M5 13v8h14v-8");
}

.nikuptafh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13 6 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0c3oacjb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 13v8h14v-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="hntgybcog"><path class="s0c3oacjb"/><path class="c58ve3zov"/><path class="nikuptafh"/><path class="i18rtibtn"/><path class="irf6xy5kk"/><path class="x50q_4bdr"/><path class="i7iskytip"/><path class="ege_q3bkn"/></g>`,
		"fallback": "iconmind:gift-open-duotone-thin",
	});
}

export default Component;
