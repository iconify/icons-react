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

.j7-uhil1e {
  width: 7px;
  height: 7.5px;
  x: 8.5px;
  y: 13.75px;
  rx: 0.75px;
}

.r2x3_w_0k {
  d: path("M2.75 21.25V9.4a1 1 0 0 1 .48-.85l4.5-2.7a.5.5 0 0 1 .77.43V9l4.73-2.84a.5.5 0 0 1 .77.43V9l4.73-2.84a.5.5 0 0 1 .77.43v14.66Z");
}

.xmgz99k_i {
  d: path("M12 13.75v2.5");
}
</style><g class="hntgybcog"><path class="r2x3_w_0k"/><rect class="j7-uhil1e"/><path class="xmgz99k_i"/></g>`,
		"fallback": "iconoven:fulfillment-center",
	});
}

export default Component;
