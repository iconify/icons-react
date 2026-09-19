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
		"content": `<style>.ddb05mnsv {
  width: 33.331px;
  height: 26.345px;
  x: 4.5px;
  y: 10.828px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.28px;
}

.qucwut_1g {
  width: 21.03px;
  height: 5.319px;
  x: 10.651px;
  y: 17.34px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.66px;
}

.tfdegs5qy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.04 30.304l3.648 2.106a1.208 1.208 0 0 0 1.812-1.046V16.636a1.208 1.208 0 0 0-1.812-1.046l-3.856 2.226");
}
</style><rect class="ddb05mnsv"/><path class="tfdegs5qy"/><rect class="qucwut_1g"/>`,
		"fallback": "arcticons:ds-cam",
	});
}

export default Component;
