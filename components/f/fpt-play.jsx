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
		"content": `<style>.orrh6x7pd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.77 24c0-10.376-.264-10.224 8.723-5.036s8.986 4.884 0 10.072S16.77 34.376 16.77 24");
}

.rk--ofbmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5C39 5.5 42.5 9 42.5 24S39 42.5 24 42.5S5.5 39 5.5 24S9 5.5 24 5.5");
}
</style><path class="rk--ofbmf"/><path class="orrh6x7pd"/>`,
		"fallback": "arcticons:fpt-play",
	});
}

export default Component;
