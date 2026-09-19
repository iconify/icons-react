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

.r5m638bba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.074 32.068c1.002.836 1.837 1.17 4.01 1.17h.334c2.004 0 3.675-1.67 3.675-3.676h0c0-2.005-1.67-3.675-3.675-3.675h-4.512v-5.848h8.187");
}
</style><path class="h0qgeuwow"/><path class="r5m638bba"/>`,
		"fallback": "arcticons:folder-5",
	});
}

export default Component;
