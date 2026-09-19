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
		"content": `<style>.g9o7n05tw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.994 24H43.5a9.751 9.751 0 1 1-2.856-6.894");
}

.yh4m1yimd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.006 24H4.5a9.751 9.751 0 1 0 2.857-6.894");
}
</style><path class="g9o7n05tw"/><path class="yh4m1yimd"/>`,
		"fallback": "arcticons:geeksforgeeks",
	});
}

export default Component;
