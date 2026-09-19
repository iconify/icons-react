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
		"content": `<style>.ygz7-09gl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21.5v13c0 4.432-3.568 8-8 8h-21c-4.432 0-8-3.568-8-8l37-21c0-4.432-3.568-8-8-8h-21c-4.432 0-8 3.568-8 8v13");
}
</style><path class="ygz7-09gl"/>`,
		"fallback": "arcticons:finanzen-net-zero",
	});
}

export default Component;
