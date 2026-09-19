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

.uokujebns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.932 18.932a7.167 7.167 0 1 1 10.135 10.135");
}

.z4lv9y_ft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.865 13.865a14.333 14.333 0 1 1 20.27 20.27");
}
</style><circle class="cpk0fnbgt"/><path class="uokujebns"/><path class="z4lv9y_ft"/>`,
		"fallback": "arcticons:gardena-bluetooth-app",
	});
}

export default Component;
