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

.kn8ghfb-y {
  d: path("M12 11v6.5");
}

.s-gg8lbxh {
  d: path("m9.5 15 2.5 2.5 2.5 -2.5");
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}
</style><g class="hntgybcog"><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="kn8ghfb-y"/><path class="s-gg8lbxh"/></g>`,
		"fallback": "iconmind:click-and-collect-outline-thin",
	});
}

export default Component;
