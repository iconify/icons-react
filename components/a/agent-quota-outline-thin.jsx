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

.mhila7bcl {
  d: path("M20 7v10");
}

.sj1ms3civ {
  d: path("M15.27 9.28a3 3 0 1 1 -2.54 0");
}

.u7en4tb0h {
  d: path("M6.27 9.28a3 3 0 1 1 -2.54 0");
}
</style><g class="hntgybcog"><path class="u7en4tb0h"/><path class="sj1ms3civ"/><path class="mhila7bcl"/></g>`,
		"fallback": "iconmind:agent-quota-outline-thin",
	});
}

export default Component;
