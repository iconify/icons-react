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
		"content": `<style>.duohqwbdk {
  cx: 14.352px;
  cy: 33.356px;
  r: 3.959px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.r5anb5bsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24.802c4.179 0 7.755-2.565 9.25-6.205c1.47 3.62 5.071 6.205 9.25 6.205s7.755-2.565 9.25-6.205c1.495 3.64 5.071 6.205 9.25 6.205");
}

.u9_0p7b-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.311 33.356V13.892l17.254-2.391v17.898");
}

.w6uopuhfn {
  cx: 31.605px;
  cy: 29.399px;
  r: 3.959px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="u9_0p7b-i"/><circle class="duohqwbdk"/><circle class="w6uopuhfn"/><path class="r5anb5bsh"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:dsub",
	});
}

export default Component;
