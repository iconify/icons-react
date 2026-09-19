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

.mryefwbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.806 30.355a4.25 4.25 0 0 1-3.694 2.145h0a4.25 4.25 0 0 1-4.25-4.251v-2.763a4.25 4.25 0 0 1 4.25-4.251h0a4.25 4.25 0 0 1 4.252 4.25v1.382h-8.502M23.873 15.5h3.441c3.148 0 5.699 2.557 5.699 5.71s-2.551 5.712-5.698 5.712l5.698 5.578m-5.699-17h7.825m-11.266 5.739h11.266");
}
</style><rect class="j3s9ivbxi"/><path class="mryefwbwy"/>`,
		"fallback": "arcticons:digital-rupee-alt",
	});
}

export default Component;
