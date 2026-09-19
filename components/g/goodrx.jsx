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
		"content": `<style>.biazf5bpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37 18.5h-7.5V11a5.5 5.5 0 0 0-11 0v7.5H11a5.5 5.5 0 0 0 0 11h7.5V37a5.5 5.5 0 0 0 11 0v-7.5H37a5.5 5.5 0 0 0 0-11m-7.5 11h-11m0-11v11");
}
</style><path class="biazf5bpn"/>`,
		"fallback": "arcticons:goodrx",
	});
}

export default Component;
