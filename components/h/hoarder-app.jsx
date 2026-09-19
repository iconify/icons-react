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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.mn3mor69h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 10.5h11v27h-11zm16 27l5.5-3l5.5 3m-11 0v-21m11 21V24c0-2.997-2-7.649-11-7.5");
}
</style><rect class="j3s9ivbxi"/><path class="mn3mor69h"/>`,
		"fallback": "arcticons:hoarder-app",
	});
}

export default Component;
