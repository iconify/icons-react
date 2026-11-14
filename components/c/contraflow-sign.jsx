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
		"content": `<style>.ceozypbtr {
  d: path("m14.295 6.63l5.538 9.97a2.625 2.625 0 0 1-2.294 3.9H6.461a2.625 2.625 0 0 1-2.294-3.9l5.538-9.97a2.625 2.625 0 0 1 4.59 0M9.75 12.5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwjs67byu {
  d: path("m8.75 16.5l1 1l1-1m3-4v5m-1-4l1-1l1 1");
}
</style><g class="hntgybcog"><path class="ceozypbtr"/><path class="wwjs67byu"/></g>`,
		"fallback": "uix:contraflow-sign",
	});
}

export default Component;
