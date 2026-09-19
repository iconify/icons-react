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
		"content": `<style>.vu2blbwyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.96 5.5L24 21.46L8.04 5.5M42.5 39.96L26.54 24L42.5 8.04M8.04 42.5L24 26.54L39.96 42.5M5.5 8.04L21.46 24L5.5 39.96");
}
</style><path class="vu2blbwyk"/>`,
		"fallback": "arcticons:exodus",
	});
}

export default Component;
