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
		"content": `<style>.ovpo1sb1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18 33V15h4.06A7.88 7.88 0 0 1 30 22.87v2.25A7.88 7.88 0 0 1 22.09 33Z");
}

.u_vcnxv7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.4 15v26.55a2 2 0 0 0 1.95 2h27.3a2 2 0 0 0 2-2V6.45a2 2 0 0 0-2-1.95H18");
}
</style><path class="u_vcnxv7h"/><path class="ovpo1sb1e"/>`,
		"fallback": "arcticons:docus",
	});
}

export default Component;
