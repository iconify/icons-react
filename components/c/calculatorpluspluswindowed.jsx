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
		"content": `<style>.c5jpd-bnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.15 37.41c-7.406.014-13.421-5.98-13.434-13.385S16.694 10.604 24.1 10.59a13.4 13.4 0 0 1 9.519 3.94l-4.52 4.52a7 7 0 1 0 0 9.91h0l4.52 4.52a13.37 13.37 0 0 1-9.47 3.93m3.231-16.14v5m-2.5-2.5h5m4.89-2.5v5m-2.5-2.5h5m3.04-16.08l-2.4 2.4m0-2.4l2.4 2.4M35.72 5.5v6.79h6.78");
}

.j3s9ivbxi {
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
</style><rect class="j3s9ivbxi"/><path class="c5jpd-bnd"/>`,
		"fallback": "arcticons:calculatorpluspluswindowed",
	});
}

export default Component;
