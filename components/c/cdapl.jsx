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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.wvuaupb-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.452 21.014H9.5v9.41h8.254m10.499-12.847v12.846h-7.187v-9.466h7.13m4.858-.112H38.5v9.578h-6.794v-4.817h6.738");
}
</style><path class="i9clfwm2k"/><path class="wvuaupb-r"/>`,
		"fallback": "arcticons:cdapl",
	});
}

export default Component;
