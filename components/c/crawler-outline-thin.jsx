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

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.lnkmmebvu {
  d: path("M3 10a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.qxnpdo0dk {
  d: path("M3 10h14");
}

.riylgsuoc {
  d: path("M10 3a4.5 7 0 0 0 0 14 4.5 7 0 0 0 0 -14");
}
</style><g class="hntgybcog"><path class="lnkmmebvu"/><path class="qxnpdo0dk"/><path class="riylgsuoc"/><path class="kfdmhd64i"/></g>`,
		"fallback": "iconmind:crawler-outline-thin",
	});
}

export default Component;
