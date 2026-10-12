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
		"content": `<style>.a95yrp1fb {
  d: path("M12 12.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 1 0 0-4.5m0-9.75v3M5.5 4.5l1.75 2m11.25-2l-1.75 2m-14 3.5H5m16.25 0H19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9o9adbay {
  width: 9.5px;
  height: 12.5px;
  x: 7.25px;
  y: 8.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="x9o9adbay"/><path class="a95yrp1fb"/></g>`,
		"fallback": "iconoven:flashing-doorbell",
	});
}

export default Component;
