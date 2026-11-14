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

.hx28i2b-f {
  d: path("M13.75 8.5H18m-7.75 0H6m6-1.75V2.5m1.25 4.75l3-3m-5.5 3l-3-3m5.5 5.5l3 3m-5.5-3l-3 3");
}

.ifxw_ccog {
  fill: currentColor;
  d: path("M12 8.5h.01");
}

.isd-xgbpn {
  d: path("M12 10.25V21.5m0 0c-2.5 0-5-1.5-5.5-4.5c3 .5 5 2 5.5 4.5m0 0c2.5 0 5-1.5 5.5-4.5c-3 .5-5 2-5.5 4.5");
}
</style><g class="hntgybcog"><path class="hx28i2b-f"/><path class="ifxw_ccog"/><path class="isd-xgbpn"/></g>`,
		"fallback": "uix:dandelion",
	});
}

export default Component;
