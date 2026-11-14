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
		"content": `<style>.bsi_sac1g {
  d: path("M4.5 10.5a9 9 0 0 1 9 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2gqfgbep {
  d: path("M4.5 19.5v-15a15 15 0 0 1 15 15Z");
}
</style><g class="hntgybcog"><path class="x2gqfgbep"/><path class="bsi_sac1g"/></g>`,
		"fallback": "uix:chart-pie-slice",
	});
}

export default Component;
