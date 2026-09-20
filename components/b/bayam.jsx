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
		"content": `<style>.a33f13mkr {
  cx: 27.539px;
  cy: 14.646px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.407px;
  ry: 3.821px;
}

.g1kqsybik {
  cx: 15.314px;
  cy: 18.87px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.407px;
  ry: 3.821px;
}

.vswxlnaop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 14.75za9.25 9.25 0 0 0-9.25-9.25H9.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h23.75a9.25 9.25 0 0 0 9.25-9.25A9.25 9.25 0 0 0 33.25 24a9.25 9.25 0 0 0 9.25-9.25");
}
</style><path class="vswxlnaop"/><ellipse class="g1kqsybik"/><ellipse class="a33f13mkr"/>`,
		"fallback": "arcticons:bayam",
	});
}

export default Component;
