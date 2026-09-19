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
		"content": `<style>.theuptidz {
  cx: 24px;
  cy: 28px;
  r: 6.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ye75ejbyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 12.5A15.5 15.5 0 1 1 8.5 28V4.5");
}
</style><path class="ye75ejbyp"/><circle class="theuptidz"/>`,
		"fallback": "arcticons:brubank",
	});
}

export default Component;
