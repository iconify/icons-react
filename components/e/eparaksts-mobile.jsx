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
		"content": `<style>.bue6_cbwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.57 42.34v-5.73m0-25.54V5.4m12.39 36.94v-5.73m0-25.54V5.4M11.08 17.57H5.35m37 0h-5.73M11.08 29.96H5.35m37 0h-5.73m-19.12.526V17.5l6.5 13l6.5-12.98V30.5");
}

.l4uljrodx {
  width: 37px;
  height: 37px;
  x: 5.351px;
  y: 5.341px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.xj5bcdchg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.08 11.07h25.542v25.542H11.08z");
}
</style><path class="xj5bcdchg"/><rect class="l4uljrodx"/><path class="bue6_cbwq"/>`,
		"fallback": "arcticons:eparaksts-mobile",
	});
}

export default Component;
