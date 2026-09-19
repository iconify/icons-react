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
		"content": `<style>.aciq_zk2j {
  width: 7px;
  height: 7px;
  x: 15.5px;
  y: 10.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.i0h7071le {
  width: 7px;
  height: 7px;
  x: 25.5px;
  y: 10.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.rq8vzwp8r {
  width: 7px;
  height: 7px;
  x: 25.5px;
  y: 20.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.vqdzjnbfp {
  width: 7px;
  height: 7px;
  x: 25.5px;
  y: 30.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.wixnu8ber {
  width: 7px;
  height: 7px;
  x: 15.5px;
  y: 20.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.xozcv-pcx {
  width: 7px;
  height: 7px;
  x: 15.5px;
  y: 30.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.zvmzeo_nw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34 4.5H14a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2");
}
</style><path class="zvmzeo_nw"/><rect class="i0h7071le"/><rect class="aciq_zk2j"/><rect class="rq8vzwp8r"/><rect class="wixnu8ber"/><rect class="vqdzjnbfp"/><rect class="xozcv-pcx"/>`,
		"fallback": "arcticons:icon-changer",
	});
}

export default Component;
