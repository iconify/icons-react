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
		"content": `<style>.ny86ap99x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 13.51zA9.25 9.25 0 0 1 24 22.76V24H6.74a1.24 1.24 0 0 1-1.24-1.24a9.25 9.25 0 0 1 9.25-9.25m18.5 20.98zA9.25 9.25 0 0 1 24 25.24V24h17.26a1.24 1.24 0 0 1 1.24 1.24a9.25 9.25 0 0 1-9.25 9.25");
}

.va44kubtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 33.25zA9.25 9.25 0 0 1 22.75 24H24v17.25a1.24 1.24 0 0 1-1.25 1.25a9.25 9.25 0 0 1-9.25-9.25m21-18.5zA9.25 9.25 0 0 1 25.25 24H24V6.74a1.24 1.24 0 0 1 1.25-1.24a9.25 9.25 0 0 1 9.25 9.25");
}
</style><path class="ny86ap99x"/><path class="va44kubtz"/>`,
		"fallback": "arcticons:google-photos",
	});
}

export default Component;
