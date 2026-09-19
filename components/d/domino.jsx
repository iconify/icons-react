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
		"content": `<style>.gcw1kzqxr {
  cx: 23.82px;
  cy: 30.18px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j0lda3b3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.82 17.82l12.36 12.36");
}

.nenceij6e {
  width: 35.91px;
  height: 17.47px;
  x: 6.052px;
  y: 15.266px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.9px;
  ry: 0.9px;
}

.pdiogbbvc {
  cx: 30.55px;
  cy: 17.45px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uumtny9vk {
  cx: 36.55px;
  cy: 17.45px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wu2szmvpr {
  cx: 24.55px;
  cy: 17.45px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yrx349bes {
  cx: 17.82px;
  cy: 30.18px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zuv1syb6u {
  cx: 11.82px;
  cy: 30.18px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect transform="rotate(-45 24.007 24.001)" class="nenceij6e"/><path class="j0lda3b3b"/><circle class="pdiogbbvc"/><circle class="uumtny9vk"/><circle class="wu2szmvpr"/><circle class="yrx349bes"/><circle class="gcw1kzqxr"/><circle class="zuv1syb6u"/>`,
		"fallback": "arcticons:domino",
	});
}

export default Component;
