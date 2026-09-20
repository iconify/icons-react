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
		"content": `<style>.ewtnrrbhf {
  width: 18.5px;
  height: 18.5px;
  x: 24px;
  y: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  rx: 4px;
}

.t_qn51utk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.805 38.25l-.001-10l-5.366 6.717h6.625m11.875-18.529a3.313 3.313 0 0 0 6.625 0v-3.375a3.313 3.313 0 0 0-6.626 0Zm-18.5-3.375a3.313 3.313 0 0 1 6.624 0a3.1 3.1 0 0 1-.97 2.342c-1.34 1.176-5.654 4.345-5.654 4.345h6.625m14.375 13.5a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5h1.624a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5m.001 0a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5h-1.626a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5m.001 0h1.625");
}

.uiemcjb2h {
  width: 18.5px;
  height: 18.5px;
  x: 24px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  rx: 4px;
}

.y1k68js3m {
  width: 18.5px;
  height: 18.5px;
  x: 5.5px;
  y: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  rx: 4px;
}

.ylqth8byp {
  width: 18.5px;
  height: 18.5px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  rx: 4px;
}
</style><rect class="uiemcjb2h"/><rect class="y1k68js3m"/><rect class="ewtnrrbhf"/><rect class="ylqth8byp"/><path class="t_qn51utk"/>`,
		"fallback": "arcticons:2048",
	});
}

export default Component;
