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

.n4ahccbtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.802 15.246c.264-.791 1.055-1.32 1.846-1.583h0c1.583-.528 3.429.264 3.957 1.846L30.198 34.5m-5.012-13.715L19.65 34.5");
}
</style><path class="n4ahccbtn"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:arch-packages",
	});
}

export default Component;
