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
		"content": `<style>.y-fwd_bxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m18.181 29.111l2.478-2.494m-2.478-18.616l2.478 2.494m.001 0v16.122m-2.479 2.494H17.672V13.5h10.01");
}
</style><path class="y-fwd_bxf"/>`,
		"fallback": "arcticons:delhivery",
	});
}

export default Component;
