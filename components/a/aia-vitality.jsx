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

.xlc38_h5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.411 16.612c.023 6.56.097 14.103 1.441 19.426c.649 2.57 1.94 2.027 2.619-.23c1.978-6.583 6.976-23.248 15.118-25.552");
}
</style><path class="xlc38_h5m"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:aia-vitality",
	});
}

export default Component;
