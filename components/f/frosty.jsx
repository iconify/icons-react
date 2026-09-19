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
		"content": `<style>.g9mi12cgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.203 15.567c.987-.987 2.585-1.1 4.028.343L43.5 33.175h-7.7L24.048 21.41l-2.674 2.427l9.196 9.198h-7.514l-5.447-5.448l-5.459 5.46H4.5c5.766-5.835 11.93-11.655 17.705-17.48z");
}
</style><path class="g9mi12cgg"/>`,
		"fallback": "arcticons:frosty",
	});
}

export default Component;
