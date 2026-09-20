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
		"content": `<style>.p1dbbnb9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.91 28.92v.118c0 5.23-4.436 9.472-9.91 9.472s-9.91-4.241-9.91-9.472v-9.65c0-5.232 4.436-9.473 9.91-9.473s9.91 4.24 9.91 9.472v.117M24.085 44.5v-5.66m-.122-29.68V3.5");
}
</style><path class="p1dbbnb9i"/>`,
		"fallback": "arcticons:cointrend",
	});
}

export default Component;
