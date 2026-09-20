import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j1kbsmr9b {
  fill: currentColor;
  d: path("M3.073 5.338a.51.51 0 0 0 .38.663a.51.51 0 0 0 .6-.462A2 2 0 0 1 6 4h8a2 2 0 0 1 1.947 1.54a.51.51 0 0 0 .6.462a.51.51 0 0 0 .38-.664A3 3 0 0 0 14 3H6C4.57 3 3.375 4 3.073 5.338m0 9.324a.51.51 0 0 1 .38-.663a.51.51 0 0 1 .6.462A2 2 0 0 0 6 16h8a2 2 0 0 0 1.947-1.54l.008-.062a.51.51 0 0 1 .592-.4a.51.51 0 0 1 .38.664A3 3 0 0 1 14 17H6c-1.43 0-2.625-1-2.927-2.338M16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5M3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0z");
}
</style><path class="j1kbsmr9b"/>`,
		"fallback": "fluent:border-top-bottom-20-regular",
	});
}

export default Component;
