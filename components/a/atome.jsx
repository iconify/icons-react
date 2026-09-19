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
		"content": `<style>.vx3z690tn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 39.639L24 8.361m5.928 10.022L24 8.361m18.5 31.278l-7.276-12.301m-22.449.001A15.56 15.56 0 0 0 24 32.103c6.318 0 11.76-3.756 14.213-9.156");
}
</style><path class="vx3z690tn"/>`,
		"fallback": "arcticons:atome",
	});
}

export default Component;
