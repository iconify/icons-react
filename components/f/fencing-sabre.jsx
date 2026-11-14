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

.nt0whubxd {
  d: path("M4.5 12.5a5 5 0 0 1 7 7M8 16l-3.5 3.5m7 0q-3.5 2.5-7 0");
}

.xxrjbccza {
  d: path("M11 13q4-2.5 10.5-10.5");
}
</style><g class="hntgybcog"><path class="xxrjbccza"/><path class="nt0whubxd"/></g>`,
		"fallback": "uix:fencing-sabre",
	});
}

export default Component;
