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
		"content": `<style>.h7b39acqd {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ij88zsb1s {
  d: path("M5 6h5");
}

.rqkgxvbhn {
  d: path("M5 10h5");
}

.rre72cecl {
  d: path("M2 4a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.t9j47gpqn {
  fill: currentColor;
  d: path("M16 9h6v4l-3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x4y_d5b4a {
  d: path("M16 9h6v4l-3 3 -3 -3Z");
}

.yn4h-38_p {
  d: path("M5 14h3");
}
</style><g class="hntgybcog"><path class="h7b39acqd"/><path class="t9j47gpqn"/><path class="rre72cecl"/><path class="ij88zsb1s"/><path class="rqkgxvbhn"/><path class="yn4h-38_p"/><path class="x4y_d5b4a"/></g>`,
		"fallback": "iconmind:compliance-report-duotone-thin",
	});
}

export default Component;
