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
		"content": `<style>.vx3b5_-qd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.07 17.05a4.07 4.07 0 0 1 1.4 2.14a7.6 7.6 0 0 1 .27 1.69m-6.18-3.83a4.48 4.48 0 0 1 4.51 0c1-3 .18-5.36 2.2-6.53A3.27 3.27 0 0 1 40 10h0a6 6 0 0 1 .67.08a6.9 6.9 0 0 1 2.83 2.32m-11.94 4.65a2.38 2.38 0 0 0 .44 1.43A5.6 5.6 0 0 0 33.75 20a5.85 5.85 0 0 0 4 .91c0 3.58-3.28 7.7-5.78 9.89c-8.49 7.43-32.45 9.11-26.53 5c1.73-1.2 7.31-3.53 11.31-6.5c4.67-3.87 8.4-10 14.82-12.23Zm0 0");
}
</style><path class="vx3b5_-qd"/>`,
		"fallback": "arcticons:foodtracker",
	});
}

export default Component;
