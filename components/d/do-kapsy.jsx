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
		"content": `<style>.et-jv6bfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.646 14.798c6.025 3.213 14.497 3.213 22.093-4.054M17.208 26.958c2.775-3.47 10.663-11.357 22.239-4.82");
}

.fwg_hnbzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.486 26.958V43.5H8.261v-39h23.225v2.666");
}

.lfqkjcb6q {
  cx: 26.775px;
  cy: 11.803px;
  r: 3.287px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="fwg_hnbzf"/><path class="et-jv6bfv"/><circle class="lfqkjcb6q"/>`,
		"fallback": "arcticons:do-kapsy",
	});
}

export default Component;
