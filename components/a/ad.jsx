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
		"content": `<style>.esrcq3b0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.766 31h.772a6.125 6.125 0 0 0 6.124-6.125v-1.75A6.125 6.125 0 0 0 27.537 17h-3.85v6.134m-.589 3.228h-7.021M14.338 31l5.249-14l5.25 14");
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
</style><rect class="j3s9ivbxi"/><path class="esrcq3b0w"/>`,
		"fallback": "arcticons:ad",
	});
}

export default Component;
