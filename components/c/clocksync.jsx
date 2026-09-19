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
		"content": `<style>.c8iizd1wk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.442 17.127a9.5 9.5 0 1 1 0 13.746");
}

.ctqthcb0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 22v-8.196M19 24h5.501m10.905-1.406l3.8-3.8m-6.618 3.794l-2.065-2.065");
}

.vgcndwbpp {
  cx: 17px;
  cy: 24px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x7i-mixkj {
  cx: 34px;
  cy: 24px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z2o2tumpx {
  cx: 17px;
  cy: 24px;
  r: 12.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="z2o2tumpx"/><path class="c8iizd1wk"/><circle class="vgcndwbpp"/><circle class="x7i-mixkj"/><path class="ctqthcb0j"/>`,
		"fallback": "arcticons:clocksync",
	});
}

export default Component;
