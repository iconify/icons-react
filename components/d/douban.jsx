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
		"content": `<style>.qwj0rj64y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.37 30.03l-3.98 12.83m-13.4-7.97l2.47 7.97");
}

.shazf9dab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.45 42.86h37m-37-35.8h37");
}

.t_brh_rhl {
  width: 31.53px;
  height: 17.1px;
  x: 8.18px;
  y: 12.93px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.06px;
}
</style><path class="shazf9dab"/><rect class="t_brh_rhl"/><path class="qwj0rj64y"/>`,
		"fallback": "arcticons:douban",
	});
}

export default Component;
