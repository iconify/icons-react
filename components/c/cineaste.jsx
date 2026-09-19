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
		"content": `<style>.c0ooaz9vt {
  cx: 38.804px;
  cy: 26.248px;
  r: 2.187px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mzox3mx9l {
  width: 25.527px;
  height: 17.701px;
  x: 8.286px;
  y: 17.164px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
}

.pmi48fdib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.258 13.014l3.05-4.028m-4.788 1.093l1.738 2.935m1.555 13l-9.527-5.5v11zm10.804-8.85h4.374m-4.374 3.35h4.374");
}

.thc950bcq {
  width: 39px;
  height: 26px;
  x: 4.5px;
  y: 13.014px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.u3m4nqvds {
  cx: 38.804px;
  cy: 32.678px;
  r: 2.187px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="thc950bcq"/><rect class="mzox3mx9l"/><path class="pmi48fdib"/><circle class="c0ooaz9vt"/><circle class="u3m4nqvds"/>`,
		"fallback": "arcticons:cineaste",
	});
}

export default Component;
