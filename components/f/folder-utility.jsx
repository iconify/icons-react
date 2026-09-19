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

.uujwe2b_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.174 23.138l2.101 1.717l2.537-.96l.437-2.678l-2.101-1.717m8.04 9.605l-6.376-5.21m11.014 5.967l-2.101-1.717l-2.537.96l-.437 2.678l2.101 1.717");
}
</style><path class="h0qgeuwow"/><path class="uujwe2b_f"/>`,
		"fallback": "arcticons:folder-utility",
	});
}

export default Component;
