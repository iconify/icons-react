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
		"content": `<style>.jw2wqmb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.947 5.5H9.5a4 4 0 0 0-4 4v5.447m37 0V9.5a4 4 0 0 0-4-4h-5.447M5.5 33.053V38.5a4 4 0 0 0 4 4h5.447m18.106 0H38.5a4 4 0 0 0 4-4v-5.447m-27.594-8.637l5.779 5.647l12.409-12.126");
}
</style><path class="jw2wqmb7k"/>`,
		"fallback": "arcticons:chestnyj-znak",
	});
}

export default Component;
