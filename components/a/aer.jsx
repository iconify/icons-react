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
		"content": `<style>.lnh2-j0ip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.672 19.172A4 4 0 1 1 37.5 26h-29m-2 8h29a4.25 4.25 0 1 1-3.005 7.255M18.257 7.257A6 6 0 1 1 22.499 17.5h-16");
}
</style><path class="lnh2-j0ip"/>`,
		"fallback": "arcticons:aer",
	});
}

export default Component;
