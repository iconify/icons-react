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

.wj0u_he3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15 22.5c1 13.5 17 13.5 18 0m-7-4.25c0-3 3.5-3 3.5 0m-11 0c0-3 3.5-3 3.5 0");
}
</style><rect class="j3s9ivbxi"/><path class="wj0u_he3a"/>`,
		"fallback": "arcticons:frases-diarias",
	});
}

export default Component;
