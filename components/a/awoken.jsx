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
		"content": `<style>.hj09gibdk {
  cx: 23.886px;
  cy: 23.751px;
  rx: 15.419px;
  ry: 15.47px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yd1u9sbuw {
  d: path("m5.69 34.435l36.62-.084L23.966 2.6z");
}
</style><g class="y9tr6bcfx"><path class="yd1u9sbuw"/><ellipse class="hj09gibdk"/></g>`,
		"fallback": "arcticons:awoken",
	});
}

export default Component;
