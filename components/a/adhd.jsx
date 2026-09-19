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

.zjsu57bsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.356 25.418h-3.723m-.922 2.784l2.784-8.404l2.783 8.404m9.627-8.404v8.404m5.567-8.404v8.404m-5.567-4.218h5.567m-13.178 4.218v-8.404h1.891a3.676 3.676 0 0 1 3.676 3.677v1.05a3.676 3.676 0 0 1-3.676 3.677zm15.428 0v-8.404h1.89a3.676 3.676 0 0 1 3.677 3.677v1.05a3.676 3.676 0 0 1-3.676 3.677z");
}
</style><rect class="j3s9ivbxi"/><path class="zjsu57bsm"/>`,
		"fallback": "arcticons:adhd",
	});
}

export default Component;
