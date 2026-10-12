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

.olsy2fksj {
  d: path("M5.75 10.5h5m-5 3h5");
}

.q0_gb6qzx {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2px;
}

.tkyx6ccqr {
  width: 5px;
  height: 7px;
  x: 13.25px;
  y: 8.25px;
  rx: 2.5px;
}

.z-kb47buq {
  d: path("M15.75 8.25V11");
}
</style><g class="hntgybcog"><rect class="q0_gb6qzx"/><path class="olsy2fksj"/><rect class="tkyx6ccqr"/><path class="z-kb47buq"/></g>`,
		"fallback": "iconoven:desk-mat",
	});
}

export default Component;
