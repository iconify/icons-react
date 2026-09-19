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
		"content": `<style>.cxfr3tyys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.578 22.255l13.948-6.803L24 4.5v39L6.474 32.548l13.948-6.803");
}
</style><path class="cxfr3tyys"/>`,
		"fallback": "arcticons:doubletwistpro",
	});
}

export default Component;
