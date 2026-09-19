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

.m4au2y-8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.457 27.996v-8.094h2.651a2.716 2.716 0 0 1 2.712 2.718a2.717 2.717 0 0 1-2.712 2.72h-2.651m2.651 0l2.648 2.654m-8.831-2.681h-3.587m-.888 2.681l2.682-8.094l2.681 8.094m13.959-4.047a2.024 2.024 0 0 1 0 4.047h-3.339V19.9h3.339c1.118 0 2.023.905 2.023 2.024a2.02 2.02 0 0 1-2.017 2.023zm0 0h-3.339");
}

.ml_igdg6w {
  width: 5.363px;
  height: 8.094px;
  x: 33.191px;
  y: 19.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.65px;
  ry: 2.65px;
}

.tkujg86_c {
  cx: 34.573px;
  cy: 17.389px;
  r: 0.75px;
  fill: currentColor;
}

.w1w77yo5o {
  cx: 37.355px;
  cy: 17.389px;
  r: 0.75px;
  fill: currentColor;
}
</style><rect class="j3s9ivbxi"/><circle class="w1w77yo5o"/><circle class="tkujg86_c"/><path class="m4au2y-8e"/><rect class="ml_igdg6w"/>`,
		"fallback": "arcticons:arboe",
	});
}

export default Component;
