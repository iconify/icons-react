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
		"content": `<style>.h_is23brp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.295 20.41v7.181h3.591m-.144-7.181H38.5m-2.379 7.181V20.41m-12.821 0v4.802a2.379 2.379 0 1 0 4.757 0V20.41M12.462 24a1.795 1.795 0 1 1 0 3.59H9.5v-7.18h2.962a1.795 1.795 0 1 1 0 3.59m0 0H9.5m9.186 3.59a2.38 2.38 0 0 1-2.379-2.378v-2.424a2.379 2.379 0 1 1 4.758 0v2.424a2.38 2.38 0 0 1-2.379 2.379");
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
</style><rect class="j3s9ivbxi"/><path class="h_is23brp"/>`,
		"fallback": "arcticons:boult-amp",
	});
}

export default Component;
