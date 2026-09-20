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
		"content": `<style>.d5fdbg5le {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 4.5h19a4 4 0 0 1 0 8h-19a4 4 0 0 1 0-8m0 16.5h17a4 4 0 0 1 0 8h-17a4 4 0 0 1 0-8");
}

.f6eu3_b0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 4.5c2.216 0 4 1.784 4 4V21m0 8v10.5c0 2.216-1.784 4-4 4s-4-1.784-4-4v-31");
}
</style><path class="d5fdbg5le"/><path class="f6eu3_b0t"/>`,
		"fallback": "arcticons:fanbox-viewer",
	});
}

export default Component;
