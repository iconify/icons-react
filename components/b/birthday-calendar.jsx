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
		"content": `<style>.c60_g9b7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.392 31.692V41.88a1.49 1.49 0 0 1-1.49 1.49H9.096a1.49 1.49 0 0 1-1.49-1.49h0V31.692");
}

.duv8b30_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 34.753l.902 1.83l2.02.293L25.46 38.3l.345 2.01l-1.806-.949l-1.806.95l.345-2.011l-1.46-1.424l2.018-.293Z");
}

.lrrcafucl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.667 26.608a6.333 6.333 0 0 1-6.203 6.333A6.43 6.43 0 0 1 5 26.478V24a4.45 4.45 0 0 1 4.433-4.47H38.53A4.45 4.45 0 0 1 43 23.963v2.515a6.43 6.43 0 0 1-6.464 6.463a6.333 6.333 0 0 1-6.203-6.333");
}

.z3myur6hn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 19.53v-4.47m0 0c8.606-2.98 0-10.43 0-10.43s-8.942 7.45 0 10.43m6.333 11.548a6.334 6.334 0 0 1-12.667 0");
}
</style><path class="z3myur6hn"/><path class="lrrcafucl"/><path class="c60_g9b7q"/><path class="duv8b30_l"/>`,
		"fallback": "arcticons:birthday-calendar",
	});
}

export default Component;
