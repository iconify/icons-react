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
		"content": `<style>.gx0bp1agn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.366 5.5h16.768c10.21 0 18.5 8.29 18.5 18.5s-8.29 18.5-18.5 18.5H6.366z");
}

.xf2rhbixa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.748 24l-13.496-7.793v15.586z");
}
</style><path class="gx0bp1agn"/><path class="xf2rhbixa"/>`,
		"fallback": "arcticons:dmm",
	});
}

export default Component;
