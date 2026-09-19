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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s6nxvd2_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.561 28.796a8.6 8.6 0 0 1-4.28 7.442a8.53 8.53 0 0 1-8.561 0a8.6 8.6 0 0 1-4.281-7.442M33.556 10.61l-3.503 3.516");
}

.yjoha7wqd {
  cx: 24px;
  cy: 20.203px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 8.561px;
  ry: 8.594px;
}
</style><circle class="cpk0fnbgt"/><ellipse class="yjoha7wqd"/><path class="s6nxvd2_c"/>`,
		"fallback": "arcticons:gousto",
	});
}

export default Component;
