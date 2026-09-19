import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.thr82xbla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.591 26.218l2.4-2.4l-2.4-2.401m2.4 2.401H18.009m2.4-8.725l-2.4 2.4l2.4 2.401m-2.4-2.401h11.982");
}

.v1q_ybc_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.878 4.5A2.11 2.11 0 0 0 9.77 6.608v34.784a2.11 2.11 0 0 0 2.108 2.108h24.244a2.11 2.11 0 0 0 2.108-2.108V6.608A2.11 2.11 0 0 0 36.122 4.5ZM9.77 37.8h28.46M24 39.908v-4.216");
}
</style><path class="v1q_ybc_s"/><path class="thr82xbla"/>`,
		"fallback": "arcticons:bhim-sbi-pay",
	});
}

export default Component;
