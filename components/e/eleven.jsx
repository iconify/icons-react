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
		"content": `<style>.aa9kcyixg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.17 14.44v-2.86h10.4v2.86m0 0v10.11m-10.4-10.11V22");
}

.jsghibcea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.75 4.5c-8.89 0-12.56 8.9-10.08 17.08c2.71 8.94 13.07 22 16.33 21.92s13.62-13 16.33-21.92C42.81 13.4 39.14 4.5 30.25 4.5Zm1.33 6.5");
}

.m3kwtlbxm {
  cx: 17.29px;
  cy: 22px;
  r: 2.88px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oikhsfbbb {
  cx: 27.7px;
  cy: 24.55px;
  r: 2.88px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r9f_nabmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.17 14.44h10.4");
}
</style><path class="jsghibcea"/><path class="aa9kcyixg"/><circle class="m3kwtlbxm"/><circle class="oikhsfbbb"/><path class="r9f_nabmg"/>`,
		"fallback": "arcticons:eleven",
	});
}

export default Component;
