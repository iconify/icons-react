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
		"content": `<style>.e90m4jb0e {
  width: 39px;
  height: 29px;
  x: 4.5px;
  y: 9.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.lq9pkz1do {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 16.5h39m-10 18v-2m3 2v-2m3 2v-2");
}
</style><rect class="e90m4jb0e"/><path class="lq9pkz1do"/>`,
		"fallback": "arcticons:card-emulator-pro",
	});
}

export default Component;
