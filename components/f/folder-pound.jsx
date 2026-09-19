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

.x883ttbsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.3 22.7a4.2 4.2 0 0 0-4.2-4.2h0a4.2 4.2 0 0 0-4.2 4.2v7.554a4 4 0 0 1-.813 2.418L18.7 34.5h10.6m-6.2-7.45h-4.4");
}
</style><path class="h0qgeuwow"/><path class="x883ttbsb"/>`,
		"fallback": "arcticons:folder-pound",
	});
}

export default Component;
