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
		"content": `<style>.br0qvrbvr {
  d: path("M4 9V5h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mwzl2cchp {
  d: path("M20 9V5h-4");
}

.s8ez_3bef {
  d: path("M3 11a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="s8ez_3bef"/><path class="br0qvrbvr"/><path class="mwzl2cchp"/></g>`,
		"fallback": "iconmind:box-open-outline-thin",
	});
}

export default Component;
