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
		"content": `<style>.i029m-yvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.802 25.249c0-1.97 1.582-3.567 3.533-3.567m-3.533-.001v9.454m-14.13 0v-14.27h3.18c3.414 0 6.181 2.795 6.181 6.243v1.784c0 3.448-2.768 6.243-6.182 6.243zm18.899-1.879h3.757m-1.878-1.879v3.758");
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
</style><rect class="j3s9ivbxi"/><path class="i029m-yvn"/>`,
		"fallback": "arcticons:dr-kegel",
	});
}

export default Component;
