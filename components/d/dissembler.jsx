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
		"content": `<style>.rkr-06b9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 11.974h9v9h-9zm15.026.053h9v9h-9zM11.974 36.026v-9h9v9zm15.052 0v-9h9v9z");
}

.ve07db6fn {
  width: 38px;
  height: 38px;
  x: 5px;
  y: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="ve07db6fn"/><path class="rkr-06b9t"/>`,
		"fallback": "arcticons:dissembler",
	});
}

export default Component;
