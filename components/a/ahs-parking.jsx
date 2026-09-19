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
		"content": `<style>.l12z-rjcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 17.833h12.333v12.333H5.5zm24.667 0H42.5v12.333H30.167zM17.833 30.167h12.333V42.5H17.833zm9.334 0l-9.334-9.334V5.5h12.334v24.667z");
}
</style><path class="l12z-rjcq"/>`,
		"fallback": "arcticons:ahs-parking",
	});
}

export default Component;
