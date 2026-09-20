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
		"content": `<style>.hzuae_xyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.231 25.575a4.5 4.5 0 0 1 4.5-4.5m-4.5 0V33m-5.012-5.963h-7.975M14.269 33l5.962-18l5.963 18");
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
</style><path class="hzuae_xyv"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:adobe-aero-player",
	});
}

export default Component;
