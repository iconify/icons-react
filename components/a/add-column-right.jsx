import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qfo0fvwhf {
  fill: currentColor;
  d: path("M3 20V4h7.558v16zm8.558 0V4H19v3.139q-.125-.012-.244-.018t-.256-.005q-2.027 0-3.456 1.42Q13.615 9.959 13.615 12t1.43 3.464q1.428 1.42 3.455 1.42q.134 0 .25-.015t.25-.027V20zM18 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="qfo0fvwhf"/>`,
		"fallback": "material-symbols-light:add-column-right",
	});
}

export default Component;
