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
		"content": `<style>.fxkqgzq7i {
  cx: 7px;
  cy: 27.58px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mcs1zhjdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.25 25.415L12 18.92m-1.732-1l3.464 2m26.018 5.495L36 18.92m1.732-1l-3.464 2m-24.143 2.248s5.346 4.5 13.875 4.5s13.875-4.5 13.875-4.5");
}

.t19buab8x {
  cx: 41px;
  cy: 27.58px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="fxkqgzq7i"/><circle class="t19buab8x"/><path class="mcs1zhjdx"/>`,
		"fallback": "arcticons:hello-cycling",
	});
}

export default Component;
