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
		"content": `<style>.d2o9d2bhb {
  width: 11px;
  height: 12.5px;
  x: 2.75px;
  y: 8.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qr_tqn_nr {
  d: path("M6 8.25v-2a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v2");
}

.ufxi_ob1b {
  d: path("M6.25 11.75v5.5m4-5.5v5.5M16 14.5h5.25m-3-3l3 3l-3 3");
}
</style><g class="hntgybcog"><path class="qr_tqn_nr"/><rect class="d2o9d2bhb"/><path class="ufxi_ob1b"/></g>`,
		"fallback": "iconoven:hotel-check-out",
	});
}

export default Component;
