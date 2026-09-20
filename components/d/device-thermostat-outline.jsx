import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c1_j2hala {
  fill: currentColor;
  d: path("M8.463 20.538Q7 19.075 7 17q0-1.2.525-2.238T9 13V5q0-1.25.875-2.125T12 2t2.125.875T15 5v8q.95.725 1.475 1.763T17 17q0 2.075-1.463 3.538T12 22t-3.537-1.463M11 11h2v-1h-1V9h1V7h-1V6h1V5q0-.425-.288-.712T12 4t-.712.288T11 5z");
}
</style><path class="c1_j2hala"/>`,
		"fallback": "material-symbols:device-thermostat-outline",
	});
}

export default Component;
