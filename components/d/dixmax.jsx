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
		"content": `<style>.hz-35lbcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.927 4.524L8.903 4.5c5.03 18.215 0 39 0 39l28.83-16.197c1.767-.993 1.83-3.513.115-4.592L13.702 7.518c1.818 3.902 4.654 10.81 4.606 15.803l1.55-3.417l7.854 4.435l-10.798 5.842C16.526 15.044 9.376 5.13 8.927 4.524L8.903 4.5");
}
</style><path class="hz-35lbcc"/>`,
		"fallback": "arcticons:dixmax",
	});
}

export default Component;
