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
		"content": `<style>.dlfdxnfxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.64 32.02V9.39h5.86");
}

.gvj9aybtb {
  cx: 31.05px;
  cy: 32.02px;
  r: 6.59px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n81xq1jkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.45 9.39H4.5m0 16.04h16.15M4.5 17.41h24.95");
}
</style><path class="n81xq1jkm"/><circle class="gvj9aybtb"/><path class="dlfdxnfxy"/>`,
		"fallback": "arcticons:chubbyclick",
	});
}

export default Component;
