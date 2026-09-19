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
		"content": `<style>.m5f2klbcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 31.499v-6.46c0-10.217-8.283-18.5-18.5-18.5S5.5 14.823 5.5 25.04v6.46");
}

.not9oabko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.85 26.148h1.23a2.7 2.7 0 0 1 2.697 2.697v9.919a2.7 2.7 0 0 1-2.696 2.696h-1.23A5.353 5.353 0 0 1 5.5 36.11V31.5a5.353 5.353 0 0 1 5.35-5.35m26.227 15.31h-1.23a2.7 2.7 0 0 1-2.697-2.696v-9.919a2.7 2.7 0 0 1 2.696-2.696h1.231a5.353 5.353 0 0 1 5.35 5.35v4.612a5.353 5.353 0 0 1-5.35 5.35");
}
</style><path class="m5f2klbcv"/><path class="not9oabko"/>`,
		"fallback": "arcticons:ds-audio",
	});
}

export default Component;
