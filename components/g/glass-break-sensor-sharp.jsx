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
		"content": `<style>.bock6ybzc {
  d: path("M11.42 14.96a5 5 0 0 1 3.54-3.54");
}

.o6w4s0bmn {
  cx: 16.25px;
  cy: 16.25px;
  r: 2px;
}

.vff4w6brg {
  d: path("M2.75 2.75h18.5v18.5H2.75zM9.5 9.5L6 5.75M9.5 9.5L15 6.25M9.5 9.5L6.25 15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vff4w6brg"/><circle class="o6w4s0bmn"/><path class="bock6ybzc"/></g>`,
		"fallback": "iconoven:glass-break-sensor-sharp",
	});
}

export default Component;
