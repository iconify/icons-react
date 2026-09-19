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
		"content": `<style>.o34nqtg4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.49 8.73C-9.25 8.55 19.36 59.79 38.29 27M15.59 5.5l19.65 34.05M10.05 8.45L29.71 42.5");
}
</style><path class="o34nqtg4o"/>`,
		"fallback": "arcticons:coini",
	});
}

export default Component;
