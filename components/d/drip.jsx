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
		"content": `<style>.hxjhgnbsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.486 39.347q12.451-4.144 8.298-15.766");
}

.x3r81lbwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5c-16.594-.838-24.063-18.252 0-39c24.063 20.748 16.594 38.162 0 39");
}
</style><path class="x3r81lbwh"/><path class="hxjhgnbsn"/>`,
		"fallback": "arcticons:drip",
	});
}

export default Component;
