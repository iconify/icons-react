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
		"content": `<style>.iclrahbez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.77 42.5v-37M42.5 19.81v8.38H32.32c-2.32 0-4.19-1.88-4.19-4.19c0-1.16.47-2.2 1.23-2.96c.75-.76 1.8-1.23 2.96-1.23z");
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
</style><path class="iclrahbez"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:ds-note",
	});
}

export default Component;
