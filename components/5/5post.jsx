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
		"content": `<style>.ocxzi-bqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 30.9a17.898 17.898 0 0 1-31 0m8.923-3.821c1.483 1.196 2.92 1.743 6.515 1.743h.618c3.325 0 6.02-2.594 6.02-5.795h0c0-3.2-2.695-5.795-6.02-5.795h-7.133v-9.08h13.153");
}
</style><path class="ocxzi-bqs"/>`,
		"fallback": "arcticons:5post",
	});
}

export default Component;
