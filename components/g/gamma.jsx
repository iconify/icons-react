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
		"content": `<style>.dz3f889ly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.145 12.94V6.818H9.855a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h32.29V18.796h-18.19v5.59h9.096v12.777H17.833V12.94z");
}
</style><path class="dz3f889ly"/>`,
		"fallback": "arcticons:gamma",
	});
}

export default Component;
