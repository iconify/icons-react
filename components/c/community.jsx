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
		"content": `<style>.akl6ftbtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.402 30.896h4m-4-6.9l2-1.1m0 0v8M7.032 5.876h33.936a1.52 1.52 0 0 1 1.516 1.521v24.79a1.52 1.52 0 0 1-1.516 1.521H5.516V7.398a1.52 1.52 0 0 1 1.516-1.522m9.028 27.847v8.4L5.516 33.709");
}
</style><path class="akl6ftbtv"/>`,
		"fallback": "arcticons:community",
	});
}

export default Component;
