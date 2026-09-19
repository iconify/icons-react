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

.s_wntnb9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.371 19.319v9.362m2.768-.01v-9.352l4.68 9.362l4.681-9.347v9.347m-14.798-3.14v.039a3.1 3.1 0 0 1-3.101 3.1h0a3.1 3.1 0 0 1-3.101-3.1v-3.16a3.1 3.1 0 0 1 3.101-3.1h0a3.1 3.1 0 0 1 3.101 3.1v.038");
}
</style><circle class="cpk0fnbgt"/><path class="s_wntnb9m"/>`,
		"fallback": "arcticons:cim",
	});
}

export default Component;
