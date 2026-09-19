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

.r_l8lfbtf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.118 21.364L30.67 31.907L27.449 21.43l-3.221 10.477l-3.449-10.543m-6.897 10.543l5.173-15.814l1.034 3.163m-4.493 7.413h4.55");
}
</style><rect class="j3s9ivbxi"/><path class="r_l8lfbtf"/>`,
		"fallback": "arcticons:amazfaces",
	});
}

export default Component;
