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
		"content": `<style>.b2w_03bpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.52 41.268L4.5 35.058L21.897 6.732");
}

.elessqhsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.52 41.268l4.377-34.536L43.5 36.722Z");
}
</style><path class="elessqhsd"/><path class="b2w_03bpu"/>`,
		"fallback": "arcticons:a3d-calculator",
	});
}

export default Component;
