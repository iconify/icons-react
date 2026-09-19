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
		"content": `<style>.o707_xbjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.4 6.5v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2m4.33-2v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2Z");
}

.u9pt2ab9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.165 26.1a6 6 0 0 0-6-6h0a6 6 0 0 0-6 6V30a6 6 0 0 0 6 6h0a6 6 0 0 0 6-6m0 6V12");
}
</style><path class="o707_xbjc"/><path class="u9pt2ab9f"/>`,
		"fallback": "arcticons:dictcc",
	});
}

export default Component;
