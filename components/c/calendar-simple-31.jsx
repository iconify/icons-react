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
		"content": `<style>.fd56s_bhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.238 34.778c1.104.926 2.297 1.35 4.975 1.35h.624a4 4 0 0 0 3.999-4h0a4 4 0 0 0-4-3.998m-5.6-6.666c1.107-.922 2.3-1.343 4.979-1.336l.622.004a4 4 0 0 1 4 3.999h0a4 4 0 0 1-4 3.999m-3.074 0h3.074m9.927-5.93l4-2.2m0 0v16");
}

.w5ztvbg7m {
  width: 35px;
  height: 36px;
  x: 6.5px;
  y: 7.5px;
  rx: 4px;
  ry: 4px;
}

.w9v12qzbx {
  d: path("M33.5 4.5v6m-19-6v6");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="fd56s_bhv"/><g class="y9tr6bcfx"><rect class="w5ztvbg7m"/><path class="w9v12qzbx"/></g>`,
		"fallback": "arcticons:calendar-simple-31",
	});
}

export default Component;
