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
		"content": `<style>.jqu44zbfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.527 17.635c0 5.828-4.707 10.552-10.513 10.552c-5.807 0-10.514-4.725-10.514-10.552c0-5.828 4.707-10.552 10.514-10.552s10.513 4.724 10.513 10.552");
}

.vov1pibmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24.096c0 9.29-7.504 16.821-16.76 16.821S9.98 33.386 9.98 24.095c0-9.29 7.503-16.821 16.76-16.821c9.256 0 16.76 7.531 16.76 16.821");
}
</style><path class="jqu44zbfw"/><path class="vov1pibmd"/>`,
		"fallback": "arcticons:concentration-training",
	});
}

export default Component;
