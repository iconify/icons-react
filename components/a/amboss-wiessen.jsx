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
		"content": `<style>.b5-n66bqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.03 32.05L27.23 22m11.21 9.01l-11.43-19.8l-14.6 25.28L9.23 42h22.1");
}

.d3alg41or {
  cx: 36.964px;
  cy: 37.845px;
  r: 7px;
}

.lw-gj_k1a {
  d: path("m40.964 33.845l-2 8l-2-8l-2 8l-2-8");
}

.utn25qz1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.09 36.49H6.39L24 6");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="d3alg41or"/><path class="lw-gj_k1a"/></g><path class="b5-n66bqg"/><path class="utn25qz1p"/>`,
		"fallback": "arcticons:amboss-wiessen",
	});
}

export default Component;
