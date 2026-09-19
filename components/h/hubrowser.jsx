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
		"content": `<style>.b22iv6lms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 16.508v14.984m9.927-14.984v14.984m-9.927-7.52h9.927m3.581-2.407v6.181a3.746 3.746 0 0 0 3.746 3.746h0a3.746 3.746 0 0 0 3.746-3.746v-6.181");
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
</style><rect class="j3s9ivbxi"/><path class="b22iv6lms"/>`,
		"fallback": "arcticons:hubrowser",
	});
}

export default Component;
