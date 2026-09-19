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
		"content": `<style>.b17rqyumr {
  width: 28.19px;
  height: 36.58px;
  x: 9.91px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
}

.hlqkn15pv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.91 19.69h28.18m-22.62-3.84V9.79m0 19.37V23.1m-2.83 17.98v1.05A1.37 1.37 0 0 0 14 43.5h2.47a1.37 1.37 0 0 0 1.37-1.37v-1.05m12.31 0v1.05a1.37 1.37 0 0 0 1.37 1.37H34a1.37 1.37 0 0 0 1.37-1.37v-1.05");
}
</style><rect class="b17rqyumr"/><path class="hlqkn15pv"/>`,
		"fallback": "arcticons:freezer",
	});
}

export default Component;
