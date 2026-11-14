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

.pwjncbc1x {
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 18 20H6a3.5 3.5 0 0 1-3.5-3.5v-9A3.5 3.5 0 0 1 6 4");
}

.shr76gbmb {
  d: path("M6 12q1.5-1.5 3 0t3 0t3 0t3 0M6 16.25q1.5-1.5 3 0t3 0t3 0t3 0");
}
</style><g class="hntgybcog"><path class="pwjncbc1x"/><path class="shr76gbmb"/></g>`,
		"fallback": "uix:field-flooded",
	});
}

export default Component;
