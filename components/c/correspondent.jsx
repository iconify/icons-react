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
		"content": `<style>.n61qu6wch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.82 7.09c-4.05 3.39-2.58 8.92-.56 11M20.22 23c8.27.28 13.73-.89 18.1-5c4.63-4.36 3.89-7.67 1.74-9.6C35 3.89 21.16 13.61 15 20.56c-4.2 4.75-10.46 13.35-6.16 18c5.08 5.49 14.88.4 21.71-5.58");
}
</style><path class="n61qu6wch"/>`,
		"fallback": "arcticons:correspondent",
	});
}

export default Component;
