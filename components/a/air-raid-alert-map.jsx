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
		"content": `<style>.mt_0uacow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.251 33.589h21.498v7.972H13.251zm2.189 0v-6.093a8.56 8.56 0 1 1 17.12 0v6.093M24 16.535V6.439m8.944 13.232l4.116-4.116m-2.058 10.707H42.5m-27.444-6.591l-4.116-4.116m2.058 10.707H5.5");
}
</style><path class="mt_0uacow"/>`,
		"fallback": "arcticons:air-raid-alert-map",
	});
}

export default Component;
