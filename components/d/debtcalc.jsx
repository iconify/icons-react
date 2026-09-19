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
		"content": `<style>.gr6i86b-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.533 7.963h24.935v6.575H11.533zm0 10.037h6v5.278h-6zm0 8.329h6v5.278h-6zm-.001 8.328h6v5.278h-6zM21 18h6v5.278h-6zm0 8.328h6v5.278h-6zm0 8.329h6v5.278h-6zM30.467 18h6v5.278h-6zm.001 8.328h6v5.278h-6zm-.001 8.328h6v5.278h-6zm.374-23.411h-2.028");
}

.nhbyowbhl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.996 10.407l1.13-.662v3");
}

.uhx3m_1tm {
  width: 31px;
  height: 39px;
  x: 8.5px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="uhx3m_1tm"/><path class="gr6i86b-i"/><path class="nhbyowbhl"/>`,
		"fallback": "arcticons:debtcalc",
	});
}

export default Component;
