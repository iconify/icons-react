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
		"content": `<style>.g1sr8hj7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5c4.574 0 13.553-3.558 13.553-18.551c0-10.653-4.918-17.286-7.765-20.234c-.495-.513-1.353-.034-1.158.652c2.378 8.36.578 16.829-4.63 16.829s-7.008-8.47-4.63-16.829c.195-.686-.663-1.165-1.158-.652c-2.847 2.948-7.765 9.58-7.765 20.234C10.447 39.942 19.426 43.5 24 43.5");
}

.gr6ndvb0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.457 32.279c2.269 0 4.613 2.753 4.613 5.952c0 1.228-.447 1.897-1.488 1.897c-1.526 0-4.539-2.864-4.539-6.212c0-1.042.495-1.637 1.414-1.637");
}

.p9htgob0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.543 32.279c-2.269 0-4.613 2.753-4.613 5.952c0 1.228.447 1.897 1.488 1.897c1.526 0 4.539-2.864 4.539-6.212c0-1.042-.495-1.637-1.414-1.637");
}
</style><path class="gr6ndvb0a"/><path class="g1sr8hj7d"/><path class="p9htgob0r"/>`,
		"fallback": "arcticons:hollow-knight-silksong",
	});
}

export default Component;
