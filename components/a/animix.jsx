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
		"content": `<style>.avbrndb2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.135 16.364l-4.8-1.2a5.5 5.5 0 1 0-2.668 10.672l5.691 1.423m19.464 4.866l2.844.71a5.5 5.5 0 0 0 6.67-4v-.001a5.5 5.5 0 0 0-4.002-6.67l-5.512-1.378m-1.985 5.667c0 4.168-3.489 7.547-7.792 7.547H21.31c-2.851 0-5.162-2.238-5.162-5s2.31-5 5.162-5h10.542");
}

.y2ak00_js {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.096 15.981C19.988 14.16 21.314 14 24.966 14c4.147 0 6.87 1.753 6.87 6.49V34");
}
</style><path class="avbrndb2x"/><path class="y2ak00_js"/>`,
		"fallback": "arcticons:animix",
	});
}

export default Component;
