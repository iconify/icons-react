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
		"content": `<style>.aa5lhfe8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42 39.5a1.5 1.5 0 0 0 1.5-1.5h0");
}

.axybacc3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 20.4h-1");
}

.cn5n2zyuj {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 2.919 4.865;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.135 8.5H8.432");
}

.criy_qbmv {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 2.897 4.828;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 14.828v20.758");
}

.g-h_14bki {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 2.067 2.067;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.433 20.4h-4.085a2.85 2.85 0 0 0-2.848 2.848v1.504a2.85 2.85 0 0 0 2.848 2.848h5.118");
}

.gyn18ab8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6 8.5A1.5 1.5 0 0 0 4.5 10h0");
}

.jlqvfdnzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 38A1.5 1.5 0 0 0 6 39.5h0");
}

.lfg0lgezb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 27.6h1");
}

.nbpejqbwu {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 2.919 4.865;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.865 39.5h28.703");
}

.ugwhewb7j {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 2.897 4.828;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 33.172V12.414");
}

.w7ha01tyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 10A1.5 1.5 0 0 0 42 8.5h0");
}

.yl94lpfnl {
  cx: 36.472px;
  cy: 24px;
  r: 0.795px;
  fill: currentColor;
}
</style><path class="aa5lhfe8z"/><path class="ugwhewb7j"/><path class="w7ha01tyb"/><path class="cn5n2zyuj"/><path class="gyn18ab8y"/><path class="criy_qbmv"/><path class="jlqvfdnzy"/><path class="nbpejqbwu"/><path class="axybacc3d"/><path class="g-h_14bki"/><path class="lfg0lgezb"/><circle class="yl94lpfnl"/>`,
		"fallback": "arcticons:incognitowallet",
	});
}

export default Component;
