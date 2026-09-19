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

.mc-ilhbdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 26.365c5.38 3.34 11.71 5.26 18.5 5.26s13.12-1.92 18.5-5.26");
}

.qc0iyvb8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.54 27.375v-1.746h-9.08v1.746m7.945-1.746v-9.254h-5.416c0 3.77-.323 6.244-1.568 9.254");
}
</style><rect class="j3s9ivbxi"/><path class="qc0iyvb8s"/><path class="mc-ilhbdu"/>`,
		"fallback": "arcticons:dixy",
	});
}

export default Component;
