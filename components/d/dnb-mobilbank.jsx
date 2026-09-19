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

.rfjyt-bjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.884 34.759V19.241l6.232 9.518V13.24M11.305 28.759v-9.518h2.117c2.273 0 4.115 1.864 4.115 4.164v1.19c0 2.3-1.842 4.164-4.115 4.164zM34.342 24c1.299 0 2.352 1.065 2.352 2.38s-1.053 2.379-2.352 2.379h-3.88v-9.518h3.88c1.299 0 2.352 1.065 2.352 2.38S35.64 24 34.342 24m.5 0h-3.88");
}
</style><rect class="j3s9ivbxi"/><path class="rfjyt-bjw"/>`,
		"fallback": "arcticons:dnb-mobilbank",
	});
}

export default Component;
