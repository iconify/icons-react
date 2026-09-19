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
		"content": `<style>.k79let5fw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 9.5c2.21 0 4 1.79 4 4v25c0 2.21-1.79 4-4 4h-25c-2.21 0-4-1.79-4-4");
}

.lo0fetbxp {
  width: 33px;
  height: 33px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="k79let5fw"/><rect class="lo0fetbxp"/>`,
		"fallback": "arcticons:dockwalls",
	});
}

export default Component;
