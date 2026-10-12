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
		"content": `<style>.gp0egaclj {
  cx: 12px;
  cy: 12px;
  r: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qxe3_nxau {
  d: path("M17.83 13.4a6 6 0 0 1-4.43 4.43m-2.8 0a6 6 0 0 1-4.43-4.43m0-2.8a6 6 0 0 1 4.43-4.43m2.8 0a6 6 0 0 1 4.43 4.43m2.56 5.3a9.25 9.25 0 0 1-4.49 4.49m-7.8 0a9.25 9.25 0 0 1-4.49-4.49m0-7.8A9.25 9.25 0 0 1 8.1 3.61m7.8 0a9.25 9.25 0 0 1 4.49 4.49");
}
</style><g class="hntgybcog"><circle class="gp0egaclj"/><path class="qxe3_nxau"/></g>`,
		"fallback": "iconoven:breathing-exercise",
	});
}

export default Component;
