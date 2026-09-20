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
		"content": `<style>.b741e5b4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.97 39.04v-3.719c2.974-2.974 5.467-3.918 9.265-3.918s6.29.944 9.265 3.918v3.719z");
}

.e4qcezehi {
  cx: 34.235px;
  cy: 22.893px;
  r: 4.975px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m25byb48a {
  cx: 20.168px;
  cy: 15.809px;
  r: 6.848px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ticlktb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.97 39.04H4.5v-6.289c5.03-5.03 9.245-6.625 15.668-6.625c5.765 0 9.752 1.286 14.146 5.188");
}
</style><path class="b741e5b4e"/><circle class="e4qcezehi"/><path class="ticlktb7x"/><circle class="m25byb48a"/>`,
		"fallback": "arcticons:connect-you",
	});
}

export default Component;
