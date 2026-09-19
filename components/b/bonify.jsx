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
		"content": `<style>.cw4adpb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.35 19.083a19 19 0 1 1-13.497-13.45");
}

.tuc4095vf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.019 19.291l6.363 7.127L43 5.612");
}
</style><path class="cw4adpb9e"/><path class="tuc4095vf"/>`,
		"fallback": "arcticons:bonify",
	});
}

export default Component;
