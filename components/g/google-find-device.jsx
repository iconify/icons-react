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
		"content": `<style>.c3f-hsbol {
  cx: 24px;
  cy: 24px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gwazo3zpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31 24h14.5c0-11.874-9.626-21.5-21.5-21.5V17");
}

.k3-d9w7bv {
  cx: 24px;
  cy: 24px;
  r: 14.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vfuhwkb3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 24H2.5c0 11.874 9.626 21.5 21.5 21.5V31");
}
</style><path class="vfuhwkb3k"/><circle class="k3-d9w7bv"/><circle class="c3f-hsbol"/><path class="gwazo3zpt"/>`,
		"fallback": "arcticons:google-find-device",
	});
}

export default Component;
