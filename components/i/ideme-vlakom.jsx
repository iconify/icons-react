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
		"content": `<style>.bo1mx7biu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 15.139l32.49 6.779l-6-6.588z");
}

.ha6lfqwnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.48 37.075a14 14 0 0 0 7.02-12.148c0-7.733-6.257-14.002-13.975-14.002c-2.594 0-5.138.723-7.346 2.089m-4.71 4.83a14 14 0 0 0-1.919 7.083c0 5.196 2.825 9.731 7.02 12.148");
}
</style><path class="ha6lfqwnj"/><path class="bo1mx7biu"/>`,
		"fallback": "arcticons:ideme-vlakom",
	});
}

export default Component;
