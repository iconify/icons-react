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
		"content": `<style>.erd8-3b3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.362 11.692h17.276v24.616H15.362z");
}

.wshc33b9v {
  width: 24.319px;
  height: 39px;
  x: 11.84px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.601px;
  ry: 3.601px;
}
</style><path class="erd8-3b3h"/><rect class="wshc33b9v"/>`,
		"fallback": "arcticons:dont-sleep",
	});
}

export default Component;
