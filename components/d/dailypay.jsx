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
		"content": `<style>.vv_cg5cwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.393 36.802a15 15 0 0 1 0-21.213a15 15 0 0 1 21.213 0a15 15 0 0 1 0 21.213m-30.106 0h39");
}
</style><path class="vv_cg5cwl"/>`,
		"fallback": "arcticons:dailypay",
	});
}

export default Component;
