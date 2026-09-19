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
		"content": `<style>.beqsa12ge {
  cx: 33.25px;
  cy: 14.75px;
  r: 9.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dxdrmxb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.534 40.748L6 42l1.252-2.534");
}

.p_m35qb3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.644 26.356a8.75 9.75 45 0 1-.707 13.081a8.75 9.75 45 0 1-13.081.707a8.75 9.75 45 0 1 .707-13.08a8.75 9.75 45 0 1 13.081-.708m-12.016-.228l12.244 12.244m-3.856 3.144L6.486 29.984");
}

.xa8seibsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 24A9.25 9.25 0 1 1 24 14.75v18.5A9.25 9.25 0 1 0 33.25 24z");
}
</style><path class="xa8seibsi"/><circle class="beqsa12ge"/><path class="p_m35qb3u"/><path class="dxdrmxb_w"/>`,
		"fallback": "arcticons:finbee",
	});
}

export default Component;
