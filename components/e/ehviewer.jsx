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
		"content": `<style>.too6ovb8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.77 42.5H7.16v-37h18.5m0 9.504V42.5M7.16 24h33.68v18.5");
}
</style><path class="too6ovb8o"/>`,
		"fallback": "arcticons:ehviewer",
	});
}

export default Component;
