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
		"content": `<style>.j3n6dgyji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.361 28.547l-4.98-2.724l-5.008 2.668l.984-5.706l-4.018-4.067l5.588-.802l2.525-5.182l2.469 5.21l5.579.865l-4.062 4.022zM20.092 9.473L5.5 14.415L8.166 24.1s7.784-4.57 12.378-2.438c4.654 2.16 5.748 7.186 3.183 11.015c-2.65 3.955-10.677 5.055-13.75 5.851");
}
</style><path class="j3n6dgyji"/>`,
		"fallback": "arcticons:5star-students",
	});
}

export default Component;
