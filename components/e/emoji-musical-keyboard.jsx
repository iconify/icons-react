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

.tx8ty6bkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.752 32.947V42.5M24 32.947V42.5m9.248-9.553V42.5m-22.303-37h5.746v23.991h-5.746zm10.182 0h5.746v23.991h-5.746zm10.182 0h5.746v23.991H31.31z");
}
</style><path class="tx8ty6bkc"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:emoji-musical-keyboard",
	});
}

export default Component;
