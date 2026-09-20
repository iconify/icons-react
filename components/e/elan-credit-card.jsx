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
		"content": `<style>.oq9_psbzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5v27.75a9.23 9.23 0 0 0 9.25 9.25H42.5M24 5.5h18.5V24");
}
</style><path class="oq9_psbzb"/>`,
		"fallback": "arcticons:elan-credit-card",
	});
}

export default Component;
