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
		"content": `<style>.emx8qkbxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.49 11.859L43.5 36.141H32.521L24 21.39l-5.49-9.531L4.5 36.141h18.658");
}
</style><path class="emx8qkbxd"/>`,
		"fallback": "arcticons:alat",
	});
}

export default Component;
