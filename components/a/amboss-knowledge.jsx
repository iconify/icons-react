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
		"content": `<style>.b5-n66bqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.03 32.05L27.23 22m11.21 9.01l-11.43-19.8l-14.6 25.28L9.23 42h22.1");
}

.fc6uqqb6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.814 33.845v8m0-2.786l4.3-5.187m0 7.973l-3.294-4");
}

.imu-ntbes {
  cx: 36.964px;
  cy: 37.845px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.utn25qz1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.09 36.49H6.39L24 6");
}
</style><path class="fc6uqqb6r"/><circle class="imu-ntbes"/><path class="b5-n66bqg"/><path class="utn25qz1p"/>`,
		"fallback": "arcticons:amboss-knowledge",
	});
}

export default Component;
