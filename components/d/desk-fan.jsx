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

.t82pe-ctd {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m7.5 7.5v4m-4 0h8");
}

.znla6kb3d {
  d: path("M12 10c-2.25-2-1.5-4.5 0-4.5S14.25 8 12 10m0 0c2.75-1 4.75 1 4 2.25S12.5 13 12 10m0 0c-.5 3-3.25 3.5-4 2.25S9.25 9 12 10");
}
</style><g class="hntgybcog"><path class="t82pe-ctd"/><path class="znla6kb3d"/></g>`,
		"fallback": "uix:desk-fan",
	});
}

export default Component;
