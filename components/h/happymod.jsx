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
		"content": `<style>.e-azis72o {
  cx: 29.56px;
  cy: 21.675px;
  r: 3.086px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hwklbsu_q {
  cx: 18.44px;
  cy: 21.675px;
  r: 3.086px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j6eiwwbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.343 29.374L24 34.517l-5.343-5.143m16.05-16.432c6.345-3.34 7.032-6.711 7.032-6.711h1.697c.35 4.993-.662 7.914-4.862 11.605");
}

.m52o8osmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.293 12.942C6.95 9.602 6.262 6.231 6.262 6.231H4.564c-.35 4.993.662 7.914 4.862 11.605");
}

.t_6q2_b0m {
  cx: 24px;
  cy: 25.367px;
  r: 16.402px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="t_6q2_b0m"/><circle class="hwklbsu_q"/><path class="m52o8osmw"/><circle class="e-azis72o"/><path class="j6eiwwbay"/>`,
		"fallback": "arcticons:happymod",
	});
}

export default Component;
