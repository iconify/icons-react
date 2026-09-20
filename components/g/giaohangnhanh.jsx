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

.pd1wlorel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.963 5.57v14.47l-.002-.001l-5.92-4.911v.006l-5.995 4.898l-.009.009V5.57m12.09 30.665v-9.619l6.373 9.619v-9.619m-15.811-.001v9.62m6.373-9.62v9.62m-6.373-4.828h6.373m-9.189-1.605a3.187 3.187 0 0 0-6.373 0v3.247a3.187 3.187 0 0 0 6.373 0h-3.187");
}
</style><rect class="j3s9ivbxi"/><path class="pd1wlorel"/>`,
		"fallback": "arcticons:giaohangnhanh",
	});
}

export default Component;
