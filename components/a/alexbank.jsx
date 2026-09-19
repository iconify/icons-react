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
		"content": `<style>.fme43nbbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 15.726h27m-27 16.548v-9.263a3.629 3.629 0 1 1 7.258 0v9.263m2.613 0v-9.263a3.629 3.629 0 1 1 7.258 0v9.263m2.613 0v-9.263a3.629 3.629 0 1 1 7.258 0v9.263");
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
</style><rect class="j3s9ivbxi"/><path class="fme43nbbq"/>`,
		"fallback": "arcticons:alexbank",
	});
}

export default Component;
