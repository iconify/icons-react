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

.p_4393ias {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.354 24h-9.009m9.01 0c3.014 0 5.457 2.352 5.457 5.249c0 2.9-2.446 5.251-5.458 5.251h-9.009v-21h9.01c3.014 0 5.457 2.352 5.457 5.252c0 2.896-2.446 5.248-5.458 5.248M14.187 13.5v21");
}
</style><path class="p_4393ias"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:inputbridge",
	});
}

export default Component;
