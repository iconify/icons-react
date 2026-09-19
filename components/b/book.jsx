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
		"content": `<style>.f8d0hn3sv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.7 4.5h-2.3c-2.2 0-4 1.8-4 4v31c0 2.2 1.8 4 4 4h2.3m0-39v39h20.9c2.2 0 4-1.8 4-4v-31c0-2.2-1.8-4-4-4z");
}
</style><path class="f8d0hn3sv"/>`,
		"fallback": "arcticons:book",
	});
}

export default Component;
