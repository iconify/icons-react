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

.lm1jtt7pm {
  d: path("M3.25 21.25V4.75c0-1.1.9-2 2-2h13.5c1.1 0 2 .9 2 2v16.5M8.5 2.75l1.25 4.73m5.75-4.73l-1.25 4.73");
}

.ms6me1bpn {
  cx: 12px;
  cy: 12.5px;
  r: 5.5px;
}

.yjztigbem {
  cx: 12px;
  cy: 12.5px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="lm1jtt7pm"/><circle class="ms6me1bpn"/><circle class="yjztigbem"/></g>`,
		"fallback": "iconoven:gong",
	});
}

export default Component;
