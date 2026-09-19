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
		"content": `<style>.dzb_hzbxm {
  cx: 36.025px;
  cy: 33.5px;
  r: 0.75px;
  fill: currentColor;
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.mi56tccmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.993 14.5a5.833 5.833 0 0 1 5.846 5.846v7.308a5.833 5.833 0 0 1-5.846 5.846h-2.922c-3.24 0-5.846-2.608-5.846-5.847s2.607-5.846 5.846-5.846h8.768");
}

.ol2kr8bgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.685 33.5a5.833 5.833 0 0 1-5.846-5.846v-2.922");
}
</style><rect class="j3s9ivbxi"/><path class="ol2kr8bgl"/><path class="mi56tccmg"/><circle class="dzb_hzbxm"/>`,
		"fallback": "arcticons:atone",
	});
}

export default Component;
