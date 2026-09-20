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

.u54ztzb9f {
  d: path("m5 9 7 7 7 -7");
}

.xcc3n6bjz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m5 9 7 7 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="xcc3n6bjz"/><path class="u54ztzb9f"/></g>`,
		"fallback": "iconmind:chevron-down-duotone-thin",
	});
}

export default Component;
