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
		"content": `<style>.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.qau652b-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 18.5a5.375 5.375 0 0 0-5.375 5.375c0 4.206 4.104 9.268 5.179 10.511c.12.138.329.153.467.033l.033-.033c1.06-1.248 5.07-6.305 5.07-10.511A5.375 5.375 0 0 0 24 18.5m0 6.833a1.823 1.823 0 1 1 1.823-1.823h0v.005A1.823 1.823 0 0 1 24 25.333");
}
</style><path class="h0qgeuwow"/><path class="qau652b-e"/>`,
		"fallback": "arcticons:folder-maps",
	});
}

export default Component;
