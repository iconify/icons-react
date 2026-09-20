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

.hubgvrbhc {
  d: path("M2 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.plag3bb8h {
  d: path("M6.5 14H13");
}

.w_otj1bev {
  d: path("M12 9a4 4 0 0 1 8 0");
}

.xfv57rbcs {
  d: path("M10 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="xfv57rbcs"/><path class="w_otj1bev"/><path class="hubgvrbhc"/><path class="plag3bb8h"/></g>`,
		"fallback": "iconmind:auth-outline-thin",
	});
}

export default Component;
