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
		"content": `<style>.j2zwyiste {
  cx: 32.7px;
  cy: 32.8px;
  r: 6.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qdjha5_1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4m19 10.5H37M12.1 29.1l7.6 7.5m-.1-7.5L12 36.7m3.9-25v8.5M11.6 16h8.5m9.4 15H36m-6.5 3.6H36");
}
</style><path class="qdjha5_1q"/><circle class="j2zwyiste"/>`,
		"fallback": "arcticons:clevcalc",
	});
}

export default Component;
