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
		"content": `<style>.gqgec_p4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5v-7.293l21.386-21.328l7.162 7.248L12.624 42.5ZM38.146 6.245a2.556 2.556 0 0 0-3.607 0l-4.119 4.109l7.214 7.196l4.12-4.11a2.54 2.54 0 0 0 0-3.597Z");
}
</style><path class="gqgec_p4x"/>`,
		"fallback": "arcticons:another-notes",
	});
}

export default Component;
