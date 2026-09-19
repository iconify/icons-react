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
		"content": `<style>.fjq19ykyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.687 9.5h3.087a3.395 3.395 0 0 1 3.393 3.393V23.97a3.395 3.395 0 0 1-3.393 3.393h-3.087zm0 19.503l2.817 4.024m-2.817 0l2.817-4.024m3.809 9.497h-2.649v-3.377a1.04 1.04 0 0 1 1.041-1.041h.567a1.04 1.04 0 0 0 1.04-1.041v-2.997a1.04 1.04 0 0 0-1.04-1.041h-.567a1.04 1.04 0 0 0-1.041 1.04v1.5");
}

.j3s9ivbxi {
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
</style><path class="fjq19ykyo"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:dx2-alt",
	});
}

export default Component;
