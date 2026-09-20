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
		"content": `<style>.eftbmbcnh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.9 35.3zc-1.3 0-2.4-1.1-2.4-2.4v-1.5c0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4v1.5c0 1.3-1.1 2.4-2.4 2.4");
}

.lmrm61aec {
  cx: 29px;
  cy: 26.1px;
  r: 0.8px;
  fill: currentColor;
}

.mt2qg2t9i {
  cx: 19px;
  cy: 26.1px;
  r: 0.8px;
  fill: currentColor;
}

.or6-g3q9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19 29v6.3");
}

.pk1-4_btg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29 29v6.3m9.5-29.8h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.y2gm61byv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.1 35.3v-9.4h2.1c2.3 0 4.1 1.8 4.1 4.1v1.2c0 2.3-1.8 4.1-4.1 4.1zm21.5 0v-9.4h2.1c2.3 0 4.1 1.8 4.1 4.1v1.2c0 2.3-1.8 4.1-4.1 4.1zM26.3 29v7.1c0 1.3-1.1 2.4-2.4 2.4c-.6 0-1.2-.2-1.7-.7");
}
</style><path class="y2gm61byv"/><path class="eftbmbcnh"/><circle class="mt2qg2t9i"/><path class="or6-g3q9p"/><circle class="lmrm61aec"/><path class="pk1-4_btg"/>`,
		"fallback": "arcticons:digid",
	});
}

export default Component;
