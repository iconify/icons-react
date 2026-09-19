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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qh87lwb9l {
  cx: 24px;
  cy: 24px;
  r: 17.102px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wbsoh9z1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.674 30.015l-3.027 5.795H16.441l-3.115-5.795zm-5.175-5.404L24 10.805l-6.536 17.533z");
}
</style><circle class="cpk0fnbgt"/><circle class="qh87lwb9l"/><path class="wbsoh9z1i"/>`,
		"fallback": "arcticons:boat-hearables",
	});
}

export default Component;
