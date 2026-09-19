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
		"content": `<style>.reojbdb_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.2 10.838v26.325m15.113-26.325v26.325M16.375 17.175h14.937M16.2 32.288h15.113M4.5 24h39");
}
</style><path class="reojbdb_m"/>`,
		"fallback": "arcticons:headway",
	});
}

export default Component;
