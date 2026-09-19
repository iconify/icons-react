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
		"content": `<style>.f_-8n0b_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.522 25.495v4.488a13.522 13.522 0 0 1-27.043 0l.13-5.482m12.323-7.711a12.295 12.295 0 0 1 24.59 0");
}

.j16a91btu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.545 31.333a6.193 6.193 0 0 1 12.387 0m0-15.758v27.883M5.61 24.5a6.161 6.161 0 0 1 12.322 0m0-7.71a12.295 12.295 0 1 1 14.724 12.051m-7.065-7.987v21.048");
}

.onrq0bb1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.591 20.854A12.293 12.293 0 0 1 37.886 8.563q.6 0 1.186.056m-6.55 16.569a9.696 9.696 0 0 1 9.697-9.694m-28.385 3.137a2.63 2.63 0 0 1 3.944-1.585");
}
</style><path class="f_-8n0b_m"/><path class="j16a91btu"/><path class="onrq0bb1s"/>`,
		"fallback": "arcticons:inspod",
	});
}

export default Component;
