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
		"content": `<style>.rfp1oebvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.442 11.975c2.097 19.302 11.285 25.838 27.812 30.772m-8.695-30.772c-2.097 19.3-11.286 25.838-27.812 30.771M24 5.255v6.66m-18.5 0h37");
}
</style><path class="rfp1oebvy"/>`,
		"fallback": "arcticons:hanping-lite",
	});
}

export default Component;
