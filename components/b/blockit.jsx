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
		"content": `<style>.x7guftlny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.133 5.5v24.633H17.867V17.867H42.5M5.5 5.5h37v37h-37z");
}
</style><path class="x7guftlny"/>`,
		"fallback": "arcticons:blockit",
	});
}

export default Component;
