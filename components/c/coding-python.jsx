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

.xjl0qxb_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.33 22.363v2.182l4.162 7.11h2.233m-15.188-9.5l-4.298-3.305v-4.458l4.298-3.302h2.004l4.297 3.302v4.458l-4.297 3.304zm-4.359-11.09v19.53");
}

.xz4tr0b2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.822 22.363v2.182l-7.142 12.39h-5.11");
}
</style><path class="xz4tr0b2o"/><path class="xjl0qxb_t"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:coding-python",
	});
}

export default Component;
