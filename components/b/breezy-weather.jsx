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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h7tc8zbhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35 24c0-3.04-1.23-5.79-3.22-7.78M24 35c3.04 0 5.79-1.23 7.78-3.22M13 24c0 3.04 1.23 5.79 3.22 7.78M24 13c-3.04 0-5.79 1.23-7.78 3.22m0 0L24 9m15 15l-7.22-7.78M24 39l7.78-7.22M9 24l7.22 7.78");
}

.wekj5cr_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24V9h15zm0 0h15v15zm0 0v15H9zm0 0H9V9z");
}
</style><circle class="cpk0fnbgt"/><path class="wekj5cr_p"/><path class="h7tc8zbhj"/>`,
		"fallback": "arcticons:breezy-weather",
	});
}

export default Component;
