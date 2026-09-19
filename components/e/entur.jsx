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

.tgzl-4bpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.52 28.919V14.61L35 28.919V14.61m-22 7.154h4.651m2.504 7.155H13V14.61h7.155M13 33.39h22");
}
</style><rect class="j3s9ivbxi"/><path class="tgzl-4bpu"/>`,
		"fallback": "arcticons:entur",
	});
}

export default Component;
