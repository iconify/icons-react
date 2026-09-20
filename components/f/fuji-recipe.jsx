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
		"content": `<style>.oel0kfbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.748 19.299H8.613m7.835 0h2.797M14.085 24h5.16m-7.86 0H8.613m2.435 4.701H8.613m5.135 0h5.497");
}

.peyn_jvhp {
  cx: 12.398px;
  cy: 28.701px;
  r: 1.35px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q669tqbiz {
  cx: 31.038px;
  cy: 24.405px;
  r: 8.682px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vhjamlbli {
  cx: 15.098px;
  cy: 19.299px;
  r: 1.35px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z8kp-6bcl {
  cx: 12.735px;
  cy: 24px;
  r: 1.35px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zglivibpc {
  width: 39px;
  height: 31px;
  x: 4.567px;
  y: 8.905px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="zglivibpc"/><circle class="q669tqbiz"/><circle class="vhjamlbli"/><circle class="z8kp-6bcl"/><circle class="peyn_jvhp"/><path class="oel0kfbvq"/>`,
		"fallback": "arcticons:fuji-recipe",
	});
}

export default Component;
