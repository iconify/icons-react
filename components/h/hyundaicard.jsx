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
		"content": `<style>.vl39y_2wf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 28.216v-4.432a4 4 0 0 1 4-4h31a4 4 0 0 1 4 4v4.432");
}
</style><path class="vl39y_2wf"/>`,
		"fallback": "arcticons:hyundaicard",
	});
}

export default Component;
