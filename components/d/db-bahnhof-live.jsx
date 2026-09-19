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
		"content": `<style>.ckn4tobva {
  cx: 24px;
  cy: 19.988px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gco1bibwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.5 26.25h10v11m-5-11v11m-34 0v-11h10m-5 11v-11m5 11v-26.5h19v26.5");
}

.z3h1qbb3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.094 18.877L24 21.107l2.906-2.23");
}
</style><path class="gco1bibwb"/><circle class="ckn4tobva"/><path class="z3h1qbb3h"/>`,
		"fallback": "arcticons:db-bahnhof-live",
	});
}

export default Component;
