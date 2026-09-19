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
		"content": `<style>.duqcu1boc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 27H21v15.5m0-37V21H5.5m37 0H27V5.5m0 37V27h15.5");
}
</style><path class="duqcu1boc"/>`,
		"fallback": "arcticons:henner-plus",
	});
}

export default Component;
