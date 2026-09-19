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
		"content": `<style>.p4gd38rwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.454 16.678l1.175-.08L42.5 40.607l-10.124 1.798l-15.915-1.682L5.5 42.405l2.958-24.647l8.989-1.16l1.289.064m-1.289-.064l-.642 24.162m15.571 1.645l-1.71-13.423");
}

.qena8xbsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.594 5.595a9.033 9.033 0 0 0-9.033 9.033c0 7.07 6.897 15.576 8.704 17.665a.56.56 0 0 0 .785.055l.055-.055c1.783-2.097 8.523-10.596 8.523-17.665a9.033 9.033 0 0 0-9.034-9.033m0 12.855a4.434 4.434 0 1 1 4.435-4.435v.011a4.434 4.434 0 0 1-4.435 4.424");
}
</style><path class="qena8xbsw"/><path class="p4gd38rwp"/>`,
		"fallback": "arcticons:city-transit",
	});
}

export default Component;
