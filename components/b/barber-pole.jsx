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
		"content": `<style>.hbma36-1e {
  d: path("M8.75 5.5C8.75 4 10.2 2.75 12 2.75S15.25 4 15.25 5.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r1dti4fkr {
  d: path("M8.75 13.25L13.5 8.5m-3 7.75l4.75-4.75m-7.5 8.75h8.5");
}

.uphyiwc0c {
  width: 6.5px;
  height: 7.75px;
  x: 8.75px;
  y: 8.5px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="hbma36-1e"/><rect class="uphyiwc0c"/><path class="r1dti4fkr"/></g>`,
		"fallback": "iconoven:barber-pole",
	});
}

export default Component;
