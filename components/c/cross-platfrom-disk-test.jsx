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
		"content": `<style>.and5fbsop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.24 39V25.751h2.981a5.796 5.796 0 0 1 5.797 5.797v1.656A5.796 5.796 0 0 1 16.22 39zm12.742-16.751V9h4.338c2.452 0 4.44 1.992 4.44 4.45s-1.988 4.45-4.44 4.45h-4.338m0 7.851h8.778M30.371 39V25.751m-8.353-7.945v.054a4.389 4.389 0 0 1-8.777 0v-4.47a4.389 4.389 0 0 1 8.777 0v.054");
}

.j98an1bqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z");
}
</style><path class="j98an1bqd"/><path class="and5fbsop"/>`,
		"fallback": "arcticons:cross-platfrom-disk-test",
	});
}

export default Component;
