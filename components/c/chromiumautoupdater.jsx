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
		"content": `<style>.cf3avdrmf {
  cx: 24.18px;
  cy: 24.02px;
  r: 8.05px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n3p265bjx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 15.95h19.94M17.21 28.02L7.24 10.75m23.91 17.29l-9.97 17.27M24 19.64v8.53m-2.91-3.05L24 28.36l2.91-3.24");
}
</style><circle class="cpk0fnbgt"/><circle class="cf3avdrmf"/><path class="n3p265bjx"/>`,
		"fallback": "arcticons:chromiumautoupdater",
	});
}

export default Component;
