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
		"content": `<style>.b3xujzayl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.1 38.65c1.13 1.12 3.94-.57 2.82-1.69M29 37c-1.12 1.12 1.69 2.81 2.82 1.69m-9.57 2.81c.05 1.69 3.38 1.69 3.39 0m-10.53-9.92c-4-4.5-3.06-5.22.32-.17m17.1 0c3.38-5.05 4.32-4.33.33.17m7.3 6.63C34.53 27 13.46 27 7.84 38.21m-5-10.61a21.48 21.48 0 0 1 42.32-7.33a21.4 21.4 0 0 1-17.46 24.9A21.47 21.47 0 0 1 2.83 27.83m7.08 7.37v-27m7.32 22.54v-27M24 29.77V2.59m6.75 28.18v-27m7.32 31.46v-27");
}
</style><path class="b3xujzayl"/>`,
		"fallback": "arcticons:detoxdroid",
	});
}

export default Component;
