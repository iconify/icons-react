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
		"content": `<style>.ghrb17lmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.396 23.56a2 2 0 1 1 4 0v1.3a2 2 0 1 1-4 0M25.5 18.925l-3 10.15");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.ri-u89bcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.265 26.875v-8l5.3 8v-8m13.531-.015v8m5.3-8v8m-5.3-4.015h5.3m-15.666-1.27v6c0 1.105-.886 2-1.98 2q-.342-.001-.648-.11");
}

.t26n92ubx {
  cx: 18.731px;
  cy: 19.175px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="ri-u89bcb"/><circle class="t26n92ubx"/><path class="ghrb17lmg"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:cyrillic",
	});
}

export default Component;
