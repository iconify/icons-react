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
		"content": `<style>.h9r27b6ce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.82 40.429A21.5 21.5 0 1 1 22.127 2.541m3.747-.001a21.5 21.5 0 0 1 14.597 35.24");
}
</style><path class="h9r27b6ce"/>`,
		"fallback": "arcticons:disky",
	});
}

export default Component;
