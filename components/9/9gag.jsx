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
		"content": `<style>.lq2omjlsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.93 14.25L24 24L7.07 14.25");
}

.uuw5qpber {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.07 14.25L24 4.5l16.93 9.75v19.5L24 43.5L7.07 33.75");
}
</style><path class="lq2omjlsq"/><path class="uuw5qpber"/>`,
		"fallback": "arcticons:9gag",
	});
}

export default Component;
