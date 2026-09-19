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
		"content": `<style>.cinmmvj8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5v-37h24.666m.001 24.667H17.834V42.5");
}

.n6x1xfb0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.166 42.5h6.167a6.167 6.167 0 0 0 6.167-6.167V24a6.167 6.167 0 0 0-6.167-6.166h-18.5");
}
</style><path class="n6x1xfb0v"/><path class="cinmmvj8l"/>`,
		"fallback": "arcticons:first-due",
	});
}

export default Component;
