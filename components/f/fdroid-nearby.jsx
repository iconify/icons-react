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
		"content": `<style>.c2f8r_-lw {
  cx: 22.671px;
  cy: 23.916px;
  r: 8.351px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dfdrglb6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.177 41.58a18.02 18.02 0 0 0 21.38-15.6M33.686 9.676a18.011 18.011 0 0 0-28.66 17.827");
}

.fhmwt1zst {
  cx: 9.955px;
  cy: 36.631px;
  r: 5.455px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w9dt4705b {
  cx: 39.136px;
  cy: 16.656px;
  r: 4.364px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="c2f8r_-lw"/><circle class="w9dt4705b"/><circle class="fhmwt1zst"/><path class="dfdrglb6e"/>`,
		"fallback": "arcticons:fdroid-nearby",
	});
}

export default Component;
