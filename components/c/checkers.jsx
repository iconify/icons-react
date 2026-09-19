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
		"content": `<style>.a-zfhxkck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5v-37M5.5 24.1h37");
}

.d78h1nqkr {
  cx: 14.8px;
  cy: 14.9px;
  r: 6.7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
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

.ntgcccbei {
  cx: 14.8px;
  cy: 14.9px;
  r: 3.8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="d78h1nqkr"/><path class="a-zfhxkck"/><circle class="ntgcccbei"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:checkers",
	});
}

export default Component;
