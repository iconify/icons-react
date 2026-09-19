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
		"content": `<style>.acw1d3bha {
  width: 31.32px;
  height: 17.31px;
  x: 8.35px;
  y: 24.67px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.8px;
}

.ahlvx9bqz {
  cx: 16.99px;
  cy: 15.18px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fuh928b7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.83L9.16 9.5");
}

.jv0-78bwd {
  cx: 31.01px;
  cy: 15.18px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k3qm-mbda {
  width: 31.32px;
  height: 12.99px;
  x: 8.35px;
  y: 8.68px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.8px;
}

.lk5v-zbsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 5.85l-3.66 3.67M28.172 31.167a4.166 4.166 0 0 0-4.386-4.164a4.326 4.326 0 0 0-3.938 4.4v3.864a4.166 4.166 0 0 0 4.162 4.17h0a4.166 4.166 0 0 0 4.162-4.17v-1H24.01");
}
</style><circle class="ahlvx9bqz"/><circle class="jv0-78bwd"/><rect class="k3qm-mbda"/><path class="fuh928b7j"/><rect class="acw1d3bha"/><path class="lk5v-zbsu"/>`,
		"fallback": "arcticons:gdroid",
	});
}

export default Component;
