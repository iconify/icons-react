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
		"content": `<style>.by1ahsfpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 35V12a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4");
}

.j5zbyfb9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.986 29.12a9 9 0 1 1-8.247-14.576m2.678.026a9 9 0 0 1 6.937 12.26");
}
</style><path class="by1ahsfpo"/><path class="j5zbyfb9f"/>`,
		"fallback": "arcticons:average-data-usage-widget",
	});
}

export default Component;
