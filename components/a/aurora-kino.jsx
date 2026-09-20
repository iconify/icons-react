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
		"content": `<style>.f_rk0cb1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 39V27c0-2.216 1.784-4 4-4h15c2.216 0 4 1.784 4 4v12");
}

.gv_b_nb_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 31V13c0-2.216 1.784-4 4-4h31c2.216 0 4 1.784 4 4v18");
}

.wqp61tb8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 35V20c0-2.216 1.784-4 4-4h23c2.216 0 4 1.784 4 4v15");
}
</style><path class="gv_b_nb_m"/><path class="wqp61tb8w"/><path class="f_rk0cb1h"/>`,
		"fallback": "arcticons:aurora-kino",
	});
}

export default Component;
