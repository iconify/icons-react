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
		"content": `<style>.ji9yjtf5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.863 27.937c1.797-5.036 18.95-15.566 22.16-15.786c1.334-.092 1.334 1.112.785 1.896c-1.92 2.742-7.73 10.208-7.73 15.093c0 5.258 3.374 5.807 5.258 5.807a8.3 8.3 0 0 0 2.048-.354");
}

.kz6h0sb5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5c5.374 0 16.755-18.833 16.755-27.622S33.222 4.5 24 4.5S7.245 7.09 7.245 15.878S18.626 43.5 24 43.5");
}
</style><path class="kz6h0sb5z"/><path class="ji9yjtf5t"/>`,
		"fallback": "arcticons:guitartuna",
	});
}

export default Component;
