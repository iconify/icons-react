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
		"content": `<style>.fhgrxsr8c {
  d: path("M12 14.5c0-2 2-3 3.5-3c0 2-2 3-3.5 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nk63dk0qx {
  d: path("m6.5 6.5l-.5-4l3 1.75l3-1.75l3 1.75l3-1.75l-.5 4C20 11 20 17 19 21.5H5C4 17 4 11 6.5 6.5m0 0h11M12 18v-4.5");
}
</style><g class="hntgybcog"><path class="nk63dk0qx"/><path class="fhgrxsr8c"/></g>`,
		"fallback": "uix:grass-seed-bag",
	});
}

export default Component;
