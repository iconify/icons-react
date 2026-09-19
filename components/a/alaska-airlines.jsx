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

.q7y_8zb_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.876 37.235c6.053-11.607 15.906-22.837 20.624-26.47c-3.215 5.929-2.63 23.63-2.13 26.47m-3.701-14.237H11.5");
}
</style><circle class="cpk0fnbgt"/><path class="q7y_8zb_i"/>`,
		"fallback": "arcticons:alaska-airlines",
	});
}

export default Component;
