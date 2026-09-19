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
		"content": `<style>.catmv6b6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.05 31.32l4.61-4.61h-.07a5.95 5.95 0 1 1 4.57 0h0l7.65 7.65a2 2 0 0 1 0 2.76l-5.68 5.68a5.86 5.86 0 0 1-8.26 0L5.2 28.13a5.86 5.86 0 0 1 0-8.26L19.87 5.2a5.86 5.86 0 0 1 8.26 0L42.8 19.87a5.86 5.86 0 0 1 0 8.26L39 32");
}
</style><path class="catmv6b6i"/>`,
		"fallback": "arcticons:firefoxlockwise",
	});
}

export default Component;
