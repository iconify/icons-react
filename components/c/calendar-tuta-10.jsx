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
		"content": `<style>.bag4m3bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73");
}

.be8itubel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.648 30.4c-.815 2.667.666 4.8 3.333 4.8s5.274-2.133 6.09-4.8l1.467-4.8c.815-2.667-.666-4.8-3.155-4.8s-5.452 2.133-6.267 4.8zm-7.545-7.62l4.206-1.98m0 0l-4.403 14.4");
}
</style><path class="be8itubel"/><path class="bag4m3bbr"/>`,
		"fallback": "arcticons:calendar-tuta-10",
	});
}

export default Component;
