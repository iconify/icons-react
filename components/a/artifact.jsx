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
		"content": `<style>.l41n4mbnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5v-43M2.5 24h43m-1.8 8.6L4.3 15.4m11.1 28.3L32.6 4.3");
}
</style><path class="l41n4mbnv"/>`,
		"fallback": "arcticons:artifact",
	});
}

export default Component;
