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

.ltf2efvdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.793 28.86a3.25 3.25 0 0 1-6.074-1.61v-2.112a3.25 3.25 0 0 1 6.5 0v1.056h-6.5M36.907 30.5v-5.362a3.25 3.25 0 0 0-6.5 0V30.5m0-5.363v-3.25M16.456 24a3.25 3.25 0 0 1 0 6.5h-5.363v-13h5.363a3.25 3.25 0 0 1 0 6.5m0 0h-5.363");
}
</style><rect class="j3s9ivbxi"/><path class="ltf2efvdh"/>`,
		"fallback": "arcticons:ben",
	});
}

export default Component;
