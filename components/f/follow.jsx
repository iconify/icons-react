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
		"content": `<style>.gxslg9bzd {
  cx: 14.851px;
  cy: 23.848px;
  r: 3.644px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n8lyiyb3k {
  cx: 40.735px;
  cy: 40.275px;
  r: 2.225px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pp8a5cbnn {
  cx: 24px;
  cy: 38.551px;
  r: 3.644px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t_heqb_5d {
  cx: 7.265px;
  cy: 40.275px;
  r: 2.225px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xb1p4bctw {
  cx: 33.149px;
  cy: 23.848px;
  r: 3.644px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z6vsygbpw {
  cx: 24px;
  cy: 9.144px;
  r: 3.644px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="pp8a5cbnn"/><circle class="z6vsygbpw"/><circle class="gxslg9bzd"/><circle class="xb1p4bctw"/><circle class="t_heqb_5d"/><circle class="n8lyiyb3k"/>`,
		"fallback": "arcticons:follow",
	});
}

export default Component;
