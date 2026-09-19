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
		"content": `<style>.o57ie2b3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24h39v7.8h-7.8V16.2h-7.8v15.6h-7.8V16.2h-7.8v15.6H4.5z");
}
</style><path class="o57ie2b3d"/>`,
		"fallback": "arcticons:bond",
	});
}

export default Component;
