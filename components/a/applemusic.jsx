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
		"content": `<style>.bo05k8tmp {
  cx: 12.27px;
  cy: 38.68px;
  r: 4.82px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h9u4-bbds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.08 19.57a2.16 2.16 0 0 1 1.75-2.13L38 13.69a2.16 2.16 0 0 1 2.58 2.12m-.03-2.16v18.56M17.08 18.25v20.43");
}

.pirkrbbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.08 18.25v-7.83a2.16 2.16 0 0 1 1.75-2.13L38 4.54a2.16 2.16 0 0 1 2.58 2.13v7");
}

.vfl2_8dlf {
  cx: 35.73px;
  cy: 32.21px;
  r: 4.82px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="pirkrbbnc"/><path class="h9u4-bbds"/><circle class="bo05k8tmp"/><circle class="vfl2_8dlf"/>`,
		"fallback": "arcticons:applemusic",
	});
}

export default Component;
