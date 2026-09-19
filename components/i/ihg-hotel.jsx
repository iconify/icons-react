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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.px4bnm_ld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.479 18.216v11.568m5.001-11.568v11.568M24 18.216v11.568m-7.52-5.806H24m12.521-1.93c0-2.116-1.683-3.832-3.76-3.832s-3.76 1.716-3.76 3.832v3.904c0 2.116 1.683 3.832 3.76 3.832s3.76-1.716 3.76-3.832h-3.76");
}
</style><rect class="j3s9ivbxi"/><path class="px4bnm_ld"/>`,
		"fallback": "arcticons:ihg-hotel",
	});
}

export default Component;
