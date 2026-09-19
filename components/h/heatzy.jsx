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

.ln309zu8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.902 24v18.5m0-7.631a4.625 4.625 0 0 1 4.625-4.625h0a4.625 4.625 0 0 1 4.625 4.625V42.5");
}
</style><rect class="j3s9ivbxi"/><path class="ln309zu8d"/>`,
		"fallback": "arcticons:heatzy",
	});
}

export default Component;
