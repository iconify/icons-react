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
		"content": `<style>.c8ojy_bpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.952 5.587L7.203 34.501M26.037 5.5c6.434-.034 10.619 4.442 12.305 10.803m0 7.483c-1.857 7.007-8.564 11.538-15.679 10.59c-4.427-.588-7.516-2.3-9.666-6.12M7.15 34.497h9.943m20.727-5.353l3.03 5.357M24.101 5.587l11.725 20.29M21.038 37.731V42.5m3.092-.04v-4.768l2.861 4.768v-4.768");
}
</style><path class="c8ojy_bpm"/>`,
		"fallback": "arcticons:anacity",
	});
}

export default Component;
