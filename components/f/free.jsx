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
		"content": `<style>.plgagap5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.6 42.5l13.947-27.972c2.47-4.955 9.052-11.01 16.852-8.4M11.587 18.119h20.194");
}
</style><path class="plgagap5q"/>`,
		"fallback": "arcticons:free",
	});
}

export default Component;
