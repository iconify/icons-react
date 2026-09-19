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
		"content": `<style>.iiv0bncxq {
  width: 9.96px;
  height: 12.95px;
  x: 27.41px;
  y: 21.01px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.98px;
}

.p8whpqbas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z");
}

.tm58dbb1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.63 14.04L17.29 24l-6.66 9.96m13.31-19.92L17.29 24l6.65 9.96m13.43-19.92v19.92");
}
</style><path class="p8whpqbas"/><path class="tm58dbb1g"/><rect transform="rotate(-180 32.39 27.485)" class="iiv0bncxq"/>`,
		"fallback": "arcticons:adobexd",
	});
}

export default Component;
