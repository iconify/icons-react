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
		"content": `<style>.p8-_1ovuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.014 12.734A13 13 0 0 1 30.5 11a13 13 0 0 1 13 13a13 13 0 0 1-13 13a13 13 0 0 1-6.513-1.75");
}

.w8nozx66d {
  cx: 17.5px;
  cy: 24px;
  r: 13px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="p8-_1ovuv"/><circle class="w8nozx66d"/>`,
		"fallback": "arcticons:askbae",
	});
}

export default Component;
