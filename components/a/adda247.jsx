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
		"content": `<style>.wv4b38b-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.445 43.451L24.854 4.6l-15.129 39c10.757-6.374 19.775-6.374 29.72-.149");
}
</style><path class="wv4b38b-a"/>`,
		"fallback": "arcticons:adda247",
	});
}

export default Component;
