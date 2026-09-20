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
		"content": `<style>.d6o_ccoql {
  d: path("m3 17 9 -9 9 9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z30u_6b6k {
  fill: currentColor;
  d: path("m3 17 9 -9 9 9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="z30u_6b6k"/><path class="d6o_ccoql"/></g>`,
		"fallback": "iconmind:delta-duotone-thin",
	});
}

export default Component;
