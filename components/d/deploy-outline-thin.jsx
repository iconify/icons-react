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

.tdul-wdwn {
  d: path("m9 6 3 -3 3 3");
}

.uvgrx_yvv {
  d: path("M12 3v5");
}

.zt9xgrbcr {
  d: path("M13.5 11H17a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3v-3a3 3 0 0 1 3 -3h3.5");
}
</style><g class="hntgybcog"><path class="zt9xgrbcr"/><path class="uvgrx_yvv"/><path class="tdul-wdwn"/></g>`,
		"fallback": "iconmind:deploy-outline-thin",
	});
}

export default Component;
