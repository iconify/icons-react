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
		"content": `<style>.e4s4rsb_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 41.824l16.23-19.05A10.13 10.13 0 1 0 24 10.694");
}

.g09npzbqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 41.824L7.77 22.774A10.13 10.13 0 1 1 24 10.693");
}

.h37ulnbmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14 21.114h5l3-6l4 12l3-6h5");
}
</style><path class="e4s4rsb_q"/><path class="h37ulnbmd"/><path class="g09npzbqe"/>`,
		"fallback": "arcticons:heartbeat",
	});
}

export default Component;
