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

.upftvq-ij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 32V16m4 11.5v-7m4 4.5v-2m4 1h2m-18 3.5v-7M16 25v-2m-4 1h-2");
}
</style><rect class="j3s9ivbxi"/><path class="upftvq-ij"/>`,
		"fallback": "arcticons:frequency-generator",
	});
}

export default Component;
