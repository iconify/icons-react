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
		"content": `<style>.iue5_nc-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.958 29.455V18.533l3.271 10.934L35.5 18.549v10.918m-15.84-.012V18.533l3.27 10.934l3.271-10.918v10.918m-9.12-8.644a2.29 2.29 0 0 0-2.29-2.29h0a2.29 2.29 0 0 0-2.291 2.29v6.354a2.29 2.29 0 0 0 2.29 2.29h0a2.29 2.29 0 0 0 2.291-2.29v-1.81h-2.29");
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
</style><rect class="j3s9ivbxi"/><path class="iue5_nc-g"/>`,
		"fallback": "arcticons:cursed-house-multiplayer-gmm",
	});
}

export default Component;
