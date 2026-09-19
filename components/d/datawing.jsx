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
		"content": `<style>.oxjx7cb1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5L15.5 30l8.87-2.81l8.13 2.79Zm-4.9 24.32V43.5m3.23-15.71V43.5m3.86-15.73V43.5M29.63 29v14.5");
}
</style><path class="oxjx7cb1o"/>`,
		"fallback": "arcticons:datawing",
	});
}

export default Component;
