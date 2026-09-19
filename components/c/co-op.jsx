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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h3_zw6buu {
  width: 7.5px;
  height: 9.938px;
  x: 26.146px;
  y: 12px;
  rx: 3.75px;
  ry: 3.75px;
}

.j67prg3uf {
  d: path("M21.36 20.049a3.75 3.75 0 0 1-3.256 1.889h0a3.75 3.75 0 0 1-3.75-3.75V15.75a3.75 3.75 0 0 1 3.75-3.75h0c1.39 0 2.605.757 3.252 1.882M26.146 40V28.75a3.75 3.75 0 0 1 3.75-3.75h0a3.75 3.75 0 0 1 3.75 3.75v2.438a3.75 3.75 0 0 1-3.75 3.75H28.33");
}

.mzf4pri7c {
  width: 7.5px;
  height: 9.938px;
  x: 14.354px;
  y: 25px;
  rx: 3.75px;
  ry: 3.75px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><g class="y9tr6bcfx"><rect class="h3_zw6buu"/><rect class="mzf4pri7c"/><path class="j67prg3uf"/></g>`,
		"fallback": "arcticons:co-op",
	});
}

export default Component;
