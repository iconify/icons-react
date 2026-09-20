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
		"content": `<style>.axybacc3d {
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

.om7fnt0-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6 8.5zA1.5 1.5 0 0 0 4.5 10");
}

.pxevm__0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42 39.5za1.5 1.5 0 0 0 1.5-1.5");
}

.q4f--f6jx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 38zA1.5 1.5 0 0 0 6 39.5");
}

.ugwhewb7j {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 2.897 4.828;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 33.172V12.414");
}

.wqsnxjbrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 10zA1.5 1.5 0 0 0 42 8.5");
}

.yl94lpfnl {
  cx: 36.472px;
  cy: 24px;
  r: 0.795px;
  fill: currentColor;
}
</style><path class="pxevm__0w"/><path class="ugwhewb7j"/><path class="wqsnxjbrn"/><path class="cn5n2zyuj"/><path class="om7fnt0-n"/><path class="criy_qbmv"/><path class="q4f--f6jx"/><path class="nbpejqbwu"/><path class="axybacc3d"/><path class="g-h_14bki"/><path class="lfg0lgezb"/><circle class="yl94lpfnl"/>`,
		"fallback": "arcticons:incognitowallet",
	});
}

export default Component;
