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

.on0x75bho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.38 17.884h8.12l-8.12 12.257h8.12m-17-6.153h3.996m2.132 6.128H15.5V17.859h6.128");
}
</style><rect class="j3s9ivbxi"/><path class="on0x75bho"/>`,
		"fallback": "arcticons:ezkarta",
	});
}

export default Component;
