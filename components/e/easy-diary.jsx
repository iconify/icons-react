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
		"content": `<style>.fd3y66pwf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("m19.748 15.112l12.625 3.602l3.17-3.573l-13.011-3.112Z");
}

.fgtr87y9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.567 26.182l17.305 5.852a2.45 2.45 0 0 0 2.643-.729l15.756-18.444a.994.994 0 0 0-.54-1.616L24.025 7.112a2.75 2.75 0 0 0-2.69.902L5.511 26.581");
}

.pdxzz9b3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.039 18.75a5.51 5.51 0 0 0-.081 4.61L28.132 40.064a2.46 2.46 0 0 1-2.634.778L8.528 35.5a6.7 6.7 0 0 1-2.83-1.564a5.4 5.4 0 0 1-1.055-2.289a9.7 9.7 0 0 1 .013-3.289c.636-3.084 2.91-2.177 2.91-2.177");
}
</style><path class="pdxzz9b3g"/><path class="fgtr87y9k"/><path class="fd3y66pwf"/>`,
		"fallback": "arcticons:easy-diary",
	});
}

export default Component;
