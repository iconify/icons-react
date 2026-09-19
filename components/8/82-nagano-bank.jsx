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
		"content": `<style>.jynvynjqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 40.024L24 29.342l6.166 10.682l6.167-10.682M24 18.659l9.25 16.024");
}

.qwxm6qfek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 40.024L24 7.977l18.5 32.047zm6.167 0l15.417-26.706");
}
</style><path class="qwxm6qfek"/><path class="jynvynjqj"/>`,
		"fallback": "arcticons:82-nagano-bank",
	});
}

export default Component;
