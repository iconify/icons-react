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
		"content": `<style>.l9ss5cvpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33 43.5v-39H15v39m9 0v-39M15 24h18");
}
</style><path class="l9ss5cvpj"/>`,
		"fallback": "arcticons:armory-and-machine",
	});
}

export default Component;
