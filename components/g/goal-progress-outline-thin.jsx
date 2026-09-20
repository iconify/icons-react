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

.iedujiqkb {
  d: path("M7 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.lh7nxd5dq {
  d: path("M3 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.xyduj2bzh {
  d: path("m15 17 2.5 -2.5 2 2L22 14");
}
</style><g class="hntgybcog"><path class="lh7nxd5dq"/><path class="iedujiqkb"/><path class="xyduj2bzh"/></g>`,
		"fallback": "iconmind:goal-progress-outline-thin",
	});
}

export default Component;
