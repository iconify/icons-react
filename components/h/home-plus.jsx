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
		"content": `<style>.b2x5_60kp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 14.75h18.5a9.25 9.25 0 0 1 0 18.5h-18.5a9.25 9.25 0 0 1 0-18.5");
}

.d9hsz4sou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5za9.25 9.25 0 0 1 9.25 9.25v18.5a9.25 9.25 0 0 1-18.5 0v-18.5A9.25 9.25 0 0 1 24 5.5");
}
</style><path class="d9hsz4sou"/><path class="b2x5_60kp"/>`,
		"fallback": "arcticons:home-plus",
	});
}

export default Component;
