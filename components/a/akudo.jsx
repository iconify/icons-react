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
		"content": `<style>.ohfx7e__b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 11.496l-9.905 8.977L24 34.58l9.905-14.107zM24 3.5v41");
}

.zrz621bse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 3.5L5.273 20.473h37.454zm18.727 16.973L24 44.5L5.273 20.473");
}
</style><path class="zrz621bse"/><path class="ohfx7e__b"/>`,
		"fallback": "arcticons:akudo",
	});
}

export default Component;
