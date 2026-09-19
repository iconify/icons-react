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
		"content": `<style>.hgq6gqbuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.52 19.25l4.28-6.86l1.07-6.86l-5.41 4.35L24 14.5m-7.09 20.14L24 23.29");
}

.pyxy25b0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.09 34.64L17.2 12.39l-1.07-6.86l5.41 4.35l12.33 23.16m-12.24 2.92l-1.77.38l-8.56-4.94l-.67-1.79m4.89 4.23l-4.64 8.04m1.02.59l-2.04-1.18m11.61-22.04l-7.34 13.79");
}

.r21goefba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.37 35.96l1.77.38l8.56-4.94l.67-1.79m-4.89 4.23l4.64 8.04m-1.02.59l2.04-1.18");
}
</style><path class="r21goefba"/><path class="pyxy25b0n"/><path class="hgq6gqbuy"/>`,
		"fallback": "arcticons:andorstrail",
	});
}

export default Component;
