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

.zlf75sb8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 5.5V17h2L25 23.5v1l7.5 6.5h-2v11.5m-13-37V17h-2l7.5 6.5v1L15.5 31h2v11.5");
}
</style><rect class="j3s9ivbxi"/><path class="zlf75sb8m"/>`,
		"fallback": "arcticons:hostelworld",
	});
}

export default Component;
