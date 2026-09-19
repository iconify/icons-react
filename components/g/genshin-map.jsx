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

.mifyh2y2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 15l1.474 3.984a6 6 0 0 0 3.542 3.542L33 24l-3.984 1.474a6 6 0 0 0-3.542 3.542L24 33l-1.474-3.984a6 6 0 0 0-3.542-3.542L15 24l3.984-1.474a6 6 0 0 0 3.542-3.542z");
}
</style><rect class="j3s9ivbxi"/><path class="mifyh2y2j"/>`,
		"fallback": "arcticons:genshin-map",
	});
}

export default Component;
