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
		"content": `<style>.ghm8osbtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.592 38.574l16.859-16.045H27.768L16.75 33.014L27.768 43.5h11.683L28.433 33.014M7.636 24.34l5.94 5.654L40.364 4.5H28.681z");
}
</style><path class="ghm8osbtm"/>`,
		"fallback": "arcticons:flutter",
	});
}

export default Component;
