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
		"content": `<style>.cmy2wt5xf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.5 8.5H20C11.44 8.5 4.5 15.44 4.5 24S11.44 39.5 20 39.5h8V29.167h-8a5.167 5.167 0 1 1 0-10.333h8V8.5L43.5 24L29.768 37.733");
}
</style><path class="cmy2wt5xf"/>`,
		"fallback": "arcticons:clevershuttle",
	});
}

export default Component;
