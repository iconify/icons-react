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
		"content": `<style>.c0noh1b9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 21.197s21.14-11.705 39-13.774");
}

.ckqn5ieib {
  cx: 16.583px;
  cy: 20.844px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.869px;
  ry: 2.119px;
}

.m8tcl9bcq {
  cx: 30.61px;
  cy: 31.767px;
  r: 8.81px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nc0hllbum {
  cx: 30.306px;
  cy: 15.471px;
  r: 3.557px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qaq5lht6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.407 23.165l-6.66-11.15s4.035-.067 4.267-1.494s3.032-.945 3.032-.945l2.087 3.228s-3.62-.089-3.567 1.98c0 0-.874 1.285-2.569 2.016");
}

.sljkn1bnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.512 23.318s1.645-3.248 7.392-3.397");
}
</style><circle class="nc0hllbum"/><circle class="m8tcl9bcq"/><ellipse transform="rotate(-24.236 16.583 20.844)" class="ckqn5ieib"/><path class="sljkn1bnm"/><path class="qaq5lht6n"/><path class="c0noh1b9c"/>`,
		"fallback": "arcticons:golf-battle",
	});
}

export default Component;
