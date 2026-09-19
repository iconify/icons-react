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
		"content": `<style>.zbjibpgpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 18.5h-13v-13h-11v13h-13v11h13v13h11v-13h13z");
}
</style><path class="zbjibpgpc"/>`,
		"fallback": "arcticons:cmas",
	});
}

export default Component;
