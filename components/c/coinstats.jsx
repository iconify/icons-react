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
		"content": `<style>.bnvb3tbto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.617 34.752L24.003 24.006V2.501");
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

.xa_utkykh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.692 30.754A13.5 13.5 0 1 1 24 10.5M12.31 30.745l-6.93 4.001");
}
</style><circle class="cpk0fnbgt"/><path class="xa_utkykh"/><path class="bnvb3tbto"/>`,
		"fallback": "arcticons:coinstats",
	});
}

export default Component;
