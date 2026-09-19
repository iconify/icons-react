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
		"content": `<style>.gznplfboo {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.024px;
  ry: 21.5px;
}

.oal8zz2xs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.527 6.827l-8.221 14.82m9.072 8.512l-8.069-4.789");
}

.t0wbdbc0x {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 21.5px;
  ry: 7.024px;
}

.uxbxe59_x {
  cx: 24px;
  cy: 24.001px;
  r: 2.695px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><ellipse class="gznplfboo"/><ellipse transform="rotate(-30 24 24)" class="t0wbdbc0x"/><ellipse transform="rotate(-60 24 24)" class="gznplfboo"/><circle class="uxbxe59_x"/><path class="oal8zz2xs"/>`,
		"fallback": "arcticons:atomic-clock",
	});
}

export default Component;
