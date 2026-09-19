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
		"content": `<style>.lrmwn3bim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.253 3.5v41L32.334 24zm0 41V17.713l-6.587 13.394z");
}
</style><path class="lrmwn3bim"/>`,
		"fallback": "arcticons:bawag",
	});
}

export default Component;
